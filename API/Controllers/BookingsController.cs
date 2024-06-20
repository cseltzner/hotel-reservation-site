using API.Dtos;
using API.Interfaces.Repositories;
using API.Mapping;
using API.ModelHelpers;
using API.Models;
using API.Queries;
using API.Responses;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BookingsController : ControllerBase
{
    private readonly IBookingRepository _bookingRepository;
    private readonly IRoomRepository _roomRepository;
    private readonly IMemoryCache _cache;

    public BookingsController(
        IBookingRepository bookingRepository,
        IRoomRepository roomRepository,
        IMemoryCache cache)
    {
        _bookingRepository = bookingRepository;
        _roomRepository = roomRepository;
        _cache = cache;
    }

    /// <summary>
    /// @route   GET /api/bookings/:id                  <br/>
    /// @desc    Get booking by id                      <br/>
    /// @access  Public                                 <br/>
    ///                                                 <br/>
    /// @status  200 - returns BookingDto               <br/>
    /// @status  404 - Booking with given id not found  <br/>
    /// </summary>
    [HttpGet("{id}")]
    public async Task<IActionResult> GetById([FromRoute] int id)
    {
        // Check cache
        var booking = _cache.Get<Booking>($"booking:{id}");

        // If cache is empty, retrieve from database
        if (booking == null)
        {
            booking = await _bookingRepository.GetBookingById(id);
            // Write db response to cache
            _cache.Set($"booking:{id}", booking, TimeSpan.FromMinutes(10));
        }

        if (booking == null) return StatusCode(404);

        var bookingDto = BookingMapping.MapBookingToDto(booking);

        return StatusCode(200, bookingDto);
    }

    /// <summary>
    /// @route   GET /api/bookings/guest/:id                <br/>
    /// @desc    Get list of bookings by guest id           <br/>
    /// @access  Public                                     <br/>
    ///                                                     <br/>
    /// @query   SortBy - case-insensitive                  <br/>
    ///          values: "bookingTotal", "dateCreated"      <br/>
    /// @query   IsDescending - Sorts in descending order   <br/>
    /// @query   PageNumber - Page to return                <br/>
    /// @query   PageSize - Size of each page to return     <br/>
    ///                                                     <br/>
    /// @status  200 - returns PagedList of BookingDto      <br/>
    /// @status  404 - Guest with given Id not found        <br/>
    /// </summary>
    [HttpGet("guest/{id}")]
    public async Task<IActionResult> GetByGuestId([FromRoute] int id, [FromQuery] BookingQuery bookingQuery)
    {
        // Check cache
        var bookings = _cache.Get<PagedList<Booking>>($"booking/guest:{id}/{bookingQuery.ToCacheKey()}");

        // If cache is empty, retrieve from database
        if (bookings == null)
        {
            bookings = await _bookingRepository.GetBookingsByGuestId(id, bookingQuery);
            // Write db response to cache
            _cache.Set($"booking/guest:{id}/{bookingQuery.ToCacheKey()}", bookings, TimeSpan.FromMinutes(1));
        }

        if (bookings == null) return StatusCode(404);

        var bookingDtos = BookingMapping.MapPagedBookingToPagedDto(bookings);

        return StatusCode(200, bookingDtos);
    }

    /// <summary>
    /// @route   GET /api/bookings/guest                                                    <br/>
    /// @desc    Get list of bookings by guest's email and last name                        <br/>
    /// @access  Public                                                                     <br/>
    ///                                                                                     <br/>
    /// @query - email - required - email address associated with booking                   <br/>
    /// @query - lastName - required - last name of the guest associated with the booking   <br/>
    ///
    /// @query   SortBy - case-insensitive                                                  <br/>
    ///          values: "bookingTotal", "dateCreated"                                      <br/>
    /// @query   IsDescending - Sorts in descending order                                   <br/>
    /// @query   PageNumber - Page to return                                                <br/>
    /// @query   PageSize - Size of each page to return                                     <br/>
    ///                                                                                     <br/>
    /// @status  200 - returns list of BookingDto                                           <br/>
    /// @status  400 - Email or Last Name were not provided in query string                 <br/>
    /// @status  404 - Guest with given email and last name not found                       <br/>
    /// </summary>
    [HttpGet("guest")]
    public async Task<IActionResult> GetBookingsByEmailAndLastName(
        [FromQuery] string email,
        [FromQuery] string lastName,
        [FromQuery] BookingQuery bookingQuery
        )
    {
        // Return 404 if any query strings are empty
        if (string.IsNullOrWhiteSpace(email) || string.IsNullOrWhiteSpace(lastName))
            return StatusCode(400, "Email and Last Name are required query parameters");

        // Check cache
        var bookings = _cache.Get<PagedList<Booking>>($"booking/guest:{email}-{lastName}/{bookingQuery.ToCacheKey()}");

        // If cache is empty, retrieve from database
        if (bookings == null)
        {
            bookings = await _bookingRepository.GetBookingsByGuestEmailAndLastName(email, lastName, bookingQuery);
            // Write db response to cache
            _cache.Set($"booking/guest:{email}-{lastName}/{bookingQuery.ToCacheKey()}", bookings, TimeSpan.FromMinutes(1));
        }

        if (bookings == null) return StatusCode(404);

        var bookingDtos = BookingMapping.MapPagedBookingToPagedDto(bookings);

        return StatusCode(200, bookingDtos);
    }

    /// <summary>
    /// @route   POST /api/bookings                                                         <br/>
    /// @desc    Create a booking                                                           <br/>
    /// @access  Public                                                                     <br/>
    ///                                                                                     <br/>
    /// @body - CreateBookingDto                                                            <br/>
    ///                                                                                     <br/>
    /// @status  200 - returns the created booking                                          <br/>
    /// @status  400 - one or more Ids given were not found                                 <br/>
    /// </summary>
    [HttpPost]
    public async Task<IActionResult> CreateBooking([FromBody] CreateBookingDto bookingDto)
    {
        var rooms = await _roomRepository.GetListOfRoomsByRoomIds(bookingDto.BookingRooms.Select(r => r.RoomId).ToList());
        var services = await _bookingRepository.GetBookingServices();
        var paymentMethod = await _bookingRepository.GetPaymentMethodById(bookingDto.PaymentMethodId);

        // Check if all room Ids given by client are valid
        // If less rooms were found in database than room Ids given by client, then one or more room Id is invalid
        if (rooms.Count < bookingDto.BookingRooms.Count)
        {
            return StatusCode(400, "One or more room Ids are invalid");
        }

        // Check if paymentMethodId passed is valid
        if (paymentMethod == null) return StatusCode(400, "PaymentMethodId is invalid");

        var brServicesCount = 0; // Used to verify if all service Ids are valid
        var brDtoServicesCount = 0; // Used to verify if all service Ids are valid
        var bookingRooms = bookingDto.BookingRooms.Select(br =>
        {
            var brServices = services.Where(s => br.ExtraServiceIds.Contains(s.Id)).ToList();
            brServicesCount += brServices.Count;
            brDtoServicesCount += br.ExtraServiceIds.Count;
            var brRoom = rooms.Find(r => r.Id == br.RoomId);
            var numNights = BookingHelpers.CalculateNumOfNights(br.CheckInDate, br.CheckOutDate);

            return new BookingRoom
            {
                Room = brRoom!,
                CheckInDate = br.CheckInDate,
                CheckOutDate = br.CheckOutDate,
                NumOfNights = numNights,
                NumGuests = br.NumGuests,
                ExtraServices = brServices,
                TotalPrice = BookingHelpers.CalculateRoomTotalPrice(
                        brRoom!,
                        br.NumGuests,
                        numNights,
                        brServices
                    )
            };
        }).ToList();

        // Check if all service Ids given by client are valid
        // If less services were found in the database than service Ids given by client, then one or more service Id's are invalid
        if (brServicesCount < brDtoServicesCount)
        {
            return StatusCode(400, "One or more service Ids are invalid");
        }

        var booking = new Booking
        {
            Guest = BookingMapping.MapGuestDtoToGuest(bookingDto.Guest),
            PaymentMethod = paymentMethod,
            BookingRooms = bookingRooms,
            BookingTotal = BookingHelpers.CalculateBookingTotal(bookingRooms),
            OrderNotes = bookingDto.OrderNotes
        };

        booking = await _bookingRepository.CreateBooking(booking);

        var dto = BookingMapping.MapBookingToDto(booking);

        return StatusCode(200, dto);
    }
}
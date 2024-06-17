using API.Interfaces.Repositories;
using API.Mapping;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BookingsController : ControllerBase
{
    private readonly IBookingRepository _bookingRepository;
    private readonly IMemoryCache _cache;

    public BookingsController(IBookingRepository bookingRepository, IMemoryCache cache)
    {
        _bookingRepository = bookingRepository;
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
    /// @route   GET /api/bookings/guest/:id            <br/>
    /// @desc    Get list of bookings by guest id       <br/>
    /// @access  Public                                 <br/>
    ///                                                 <br/>
    /// @status  200 - returns list of BookingDto       <br/>
    /// @status  404 - Guest with given Id not found    <br/>
    /// </summary>
    [HttpGet("guest/{id}")]
    public async Task<IActionResult> GetByGuestId([FromRoute] int id)
    {
        // Check cache
        var bookings = _cache.Get<List<Booking>>($"booking/guest:{id}");

        // If cache is empty, retrieve from database
        if (bookings == null)
        {
            bookings = await _bookingRepository.GetBookingsByGuestId(id);
            // Write db response to cache
            _cache.Set($"booking/guest:{id}", bookings, TimeSpan.FromMinutes(1));
        }

        if (bookings == null) return StatusCode(404);

        var bookingDtos = bookings?.Select(booking =>
        {
            return BookingMapping.MapBookingToDto(booking);
        });

        return StatusCode(200, bookingDtos);
    }

    /// <summary>
    /// @route   GET /api/bookings/guest                                                    <br/>
    /// @desc    Get list of bookings by guest's email and last name                        <br/>
    /// @access  Public                                                                     <br/>
    ///                                                                                     <br/>
    /// @query - email - required - email address associated with booking                   <br/>
    /// @query - lastName - required - last name of the guest associated with the booking   <br/>
    ///                                                                                     <br/>
    /// @status  200 - returns list of BookingDto                                           <br/>
    /// @status  404 - Guest with given email and last name not found                       <br/>
    /// </summary>
    [HttpGet("guest")]
    public async Task<IActionResult> GetBookingsByEmailAndLastName(
        [FromQuery] string email,
        [FromQuery] string lastName
        )
    {
        // Return 404 if any query strings are empty
        if (string.IsNullOrWhiteSpace(email) || string.IsNullOrWhiteSpace(lastName)) return StatusCode(404);

        // Check cache
        var bookings = _cache.Get<List<Booking>>($"booking/guest:{email}-{lastName}");

        // If cache is empty, retrieve from database
        if (bookings == null)
        {
            bookings = await _bookingRepository.GetBookingsByGuestEmailAndLastName(email, lastName);
            // Write db response to cache
            _cache.Set($"booking/guest:{email}-{lastName}", bookings, TimeSpan.FromMinutes(1));
        }

        if (bookings == null) return StatusCode(404);

        var bookingDtos = bookings.Select(booking =>
        {
            return BookingMapping.MapBookingToDto(booking);
        });

        return StatusCode(200, bookingDtos);
    }
}
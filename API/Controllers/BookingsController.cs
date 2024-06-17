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
}
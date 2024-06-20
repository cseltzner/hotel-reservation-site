using API.Context;
using API.Interfaces.Repositories;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Repositories;

public class BookingRepository : IBookingRepository
{
    private readonly BookingContext _context;

    public BookingRepository(BookingContext context)
    {
        _context = context;
    }

    public async Task<Booking?> GetBookingById(int id)
    {
        var bookingQuery = _context.Bookings.AsQueryable();
        bookingQuery = AddIncludes(bookingQuery);

        return await bookingQuery
            .FirstOrDefaultAsync(b => b.Id == id);
    }

    public async Task<List<Booking>?> GetBookingsByGuestId(int id)
    {
        var bookingQuery = _context.Bookings.AsQueryable();
        bookingQuery = AddIncludes(bookingQuery);

        var bookings = await bookingQuery
            .Where(b => b.GuestId == id)
            .ToListAsync();

        return bookings.Count == 0 ? null : bookings;
    }

    public async Task<List<Booking>?> GetBookingsByGuestEmailAndLastName(string email, string lastName)
    {
        var bookingQuery = _context.Bookings.AsQueryable();
        bookingQuery = AddIncludes(bookingQuery);

        var bookings = await bookingQuery
            .Where(b => b.Guest.Email.ToLower() == email.ToLower())
            .Where(b => b.Guest.LastName.ToLower() == lastName.ToLower())
            .ToListAsync();

        return bookings.Count == 0 ? null : bookings;
    }

    public async Task<Booking> CreateBooking(Booking booking)
    {
        var createdBooking = _context.Bookings.Add(booking);
        await _context.SaveChangesAsync();
        return createdBooking.Entity;
    }

    public async Task<List<Service>> GetBookingServicesByIds(List<int> serviceIds)
    {
        return await _context.Services
            .Where(s => serviceIds.Contains(s.Id))
            .ToListAsync();
    }

    public async Task<List<Service>> GetBookingServices()
    {
        return await _context.Services.ToListAsync();
    }

    public async Task<PaymentMethod?> GetPaymentMethodById(int id)
    {
        return await _context.PaymentMethods.FirstOrDefaultAsync(p => p.Id == id);
    }

    private IQueryable<Booking> AddIncludes(IQueryable<Booking> query)
    {
        return query.Include(b => b.Guest)
            .Include(b => b.PaymentMethod)
            .Include(b => b.BookingRooms)
            .ThenInclude(br => br.Room)
            .Include(b => b.BookingRooms)
            .ThenInclude(br => br.Room)
            .ThenInclude(r => r.Features);
    }
}
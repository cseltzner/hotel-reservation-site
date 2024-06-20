using API.Context;
using API.Interfaces.Repositories;
using API.Models;
using API.Queries;
using API.Responses;
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

    public async Task<PagedList<Booking>?> GetBookingsByGuestId(int id, BookingQuery query)
    {
        // Check if Id exists
        if (!await _context.Guests.AnyAsync(g => g.Id == id)) return null;


        var bookingQuery = _context.Bookings.AsQueryable();
        bookingQuery = AddIncludes(bookingQuery);

        // Filter
        bookingQuery = bookingQuery.Where(b => b.GuestId == id);

        // Sort
        if (!string.IsNullOrWhiteSpace(query.SortBy))
        {
            if (query.SortBy.Equals("BookingTotal", StringComparison.OrdinalIgnoreCase))
            {
                bookingQuery = query.IsDescending
                    ? bookingQuery.OrderByDescending(b => b.BookingTotal)
                    : bookingQuery.OrderBy(b => b.BookingTotal);
            }

            if (query.SortBy.Equals("DateCreated", StringComparison.OrdinalIgnoreCase))
            {
                bookingQuery = query.IsDescending
                    ? bookingQuery.OrderByDescending(b => b.BookingCreatedDate)
                    : bookingQuery.OrderBy(b => b.BookingCreatedDate);
            }
        }

        // Pagination
        var paginatedBookings = await PagedList<Booking>.ToPagedList(bookingQuery, query.PageNumber, query.PageSize);

        return paginatedBookings;
    }

    public async Task<PagedList<Booking>?> GetBookingsByGuestEmailAndLastName(string email, string lastName, BookingQuery query)
    {
        var bookingQuery = _context.Bookings.AsQueryable();
        bookingQuery = AddIncludes(bookingQuery);

        // Filter
        bookingQuery = bookingQuery
            .Where(b => b.Guest.Email.ToLower() == email.ToLower())
            .Where(b => b.Guest.LastName.ToLower() == lastName.ToLower());

        // Check if query returns any results before continuing
        if (!await bookingQuery.AnyAsync()) return null;

        // Sort
        if (!string.IsNullOrWhiteSpace(query.SortBy))
        {
            if (query.SortBy.Equals("BookingTotal", StringComparison.OrdinalIgnoreCase))
            {
                bookingQuery = query.IsDescending
                    ? bookingQuery.OrderByDescending(b => b.BookingTotal)
                    : bookingQuery.OrderBy(b => b.BookingTotal);
            }

            if (query.SortBy.Equals("DateCreated", StringComparison.OrdinalIgnoreCase))
            {
                bookingQuery = query.IsDescending
                    ? bookingQuery.OrderByDescending(b => b.BookingCreatedDate)
                    : bookingQuery.OrderBy(b => b.BookingCreatedDate);
            }
        }

        // Pagination
        var paginatedBookings = await PagedList<Booking>.ToPagedList(bookingQuery, query.PageNumber, query.PageSize);

        return paginatedBookings;
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
using API.Context;
using API.Dtos;
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

    public async Task<Booking?> UpdateBooking(int id, UpdateBookingDto updateBookingDto)
    {
        var bookingToUpdate = await _context.Bookings
            .Include(b => b.Guest)
            .FirstOrDefaultAsync(b => b.Id == id);
        if (bookingToUpdate == null) return null;

        // Update properties if not given null values
        if (updateBookingDto.OrderNotes != null) bookingToUpdate.OrderNotes = updateBookingDto.OrderNotes;
        if (updateBookingDto.Guest?.Email != null) bookingToUpdate.Guest.Email = updateBookingDto.Guest.Email;
        if (updateBookingDto.Guest?.FirstName != null) bookingToUpdate.Guest.FirstName = updateBookingDto.Guest.FirstName;
        if (updateBookingDto.Guest?.LastName != null) bookingToUpdate.Guest.LastName = updateBookingDto.Guest.LastName;
        if (updateBookingDto.Guest?.Address != null) bookingToUpdate.Guest.Address = updateBookingDto.Guest.Address;
        if (updateBookingDto.Guest?.Address2 != null) bookingToUpdate.Guest.Address2 = updateBookingDto.Guest.Address2;
        if (updateBookingDto.Guest?.City != null) bookingToUpdate.Guest.City = updateBookingDto.Guest.City;
        if (updateBookingDto.Guest?.State != null) bookingToUpdate.Guest.State = updateBookingDto.Guest.State;
        if (updateBookingDto.Guest?.Country != null) bookingToUpdate.Guest.Country = updateBookingDto.Guest.Country;
        if (updateBookingDto.Guest?.Zip != null) bookingToUpdate.Guest.Zip = updateBookingDto.Guest.Zip;
        if (updateBookingDto.Guest?.CompanyName != null) bookingToUpdate.Guest.CompanyName = updateBookingDto.Guest.CompanyName;
        if (updateBookingDto.Guest?.Phone != null) bookingToUpdate.Guest.Phone = updateBookingDto.Guest.Phone;

        await _context.SaveChangesAsync();

        return bookingToUpdate;
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
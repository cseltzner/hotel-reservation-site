using API.Context;
using API.Interfaces.Repositories;
using Microsoft.EntityFrameworkCore;

namespace API.Repositories;

public class GuestRepository : IGuestRepository
{
    private readonly BookingContext _context;

    public GuestRepository(BookingContext context)
    {
        _context = context;
    }

    public Task<bool> GuestExists(int guestId)
    {
        return _context.Guests.AnyAsync(g => g.Id == guestId);
    }
}
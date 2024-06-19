using API.Context;
using API.Interfaces.Repositories;
using API.Models;
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

    public Task<Guest?> GetGuestByEmail(string email)
    {
        return _context.Guests.FirstOrDefaultAsync(g => g.Email == email);
    }
}
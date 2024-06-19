using API.Models;

namespace API.Interfaces.Repositories;

public interface IGuestRepository
{
    public Task<bool> GuestExists(int guestId);
    public Task<Guest?> GetGuestByEmail(string email);
}
namespace API.Interfaces.Repositories;

public interface IGuestRepository
{
    public Task<bool> GuestExists(int guestId);
}
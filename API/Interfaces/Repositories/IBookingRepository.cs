using API.Models;

namespace API.Interfaces.Repositories;

public interface IBookingRepository
{
    public Task<Booking?> GetBookingById(int id);
    public Task<List<Booking>?> GetBookingsByGuestId(int id);
    public Task<List<Booking>?> GetBookingsByGuestEmailAndLastName(string email, string lastName);
    public Task<Booking> CreateBooking(Booking booking);
    public Task<List<Service>> GetBookingServicesByIds(List<int> serviceIds);
    public Task<List<Service>> GetBookingServices();
    public Task<PaymentMethod?> GetPaymentMethodById(int id);
}
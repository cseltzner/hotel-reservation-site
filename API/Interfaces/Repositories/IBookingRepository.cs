using API.Models;
using API.Queries;
using API.Responses;

namespace API.Interfaces.Repositories;

public interface IBookingRepository
{
    public Task<Booking?> GetBookingById(int id);
    public Task<PagedList<Booking>?> GetBookingsByGuestId(int id, BookingQuery query);
    public Task<PagedList<Booking>?> GetBookingsByGuestEmailAndLastName(string email, string lastName, BookingQuery query);
    public Task<Booking> CreateBooking(Booking booking);
    public Task<List<Service>> GetBookingServicesByIds(List<int> serviceIds);
    public Task<List<Service>> GetBookingServices();
    public Task<PaymentMethod?> GetPaymentMethodById(int id);
}
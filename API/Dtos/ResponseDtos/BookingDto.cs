using API.Models;

namespace API.Dtos.ResponseDtos;

public class BookingDto
{
    public int Id { get; set; }
    public DateTime BookingCreatedDate { get; set; } = DateTime.UtcNow;
    public List<BookingRoom> BookingRooms { get; set; }
    public double BookingTotal { get; set; }
    public string? OrderNotes { get; set; }
    public GuestDto Guest { get; set; }
    public PaymentMethod PaymentMethod { get; set; }
}
namespace API.Models;

public class Booking
{
    public int Id { get; set; }
    public DateTime BookingCreatedDate { get; set; } = DateTime.UtcNow;
    public List<BookingRoom> BookingRooms { get; set; }
    public double BookingTotal { get; set; }
    public string? OrderNotes { get; set; }

    public int GuestId { get; set; }
    public Guest Guest { get; set; }

    public int PaymentMethodId { get; set; }
    public PaymentMethod PaymentMethod { get; set; }

}
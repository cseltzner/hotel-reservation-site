namespace API.Models;

public class Booking
{
    public int Id { get; set; }
    public Guest Guest { get; set; }
    public List<BookingRoom> BookingRooms { get; set; }
    public double BookingTotal { get; set; }
    public PaymentMethod PaymentMethod { get; set; }
    public string? OrderNotes { get; set; }
}
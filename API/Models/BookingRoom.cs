namespace API.Models;

public class BookingRoom
{
    public int Id { get; set; }
    public DateOnly CheckInDate { get; set; }
    public DateOnly CheckOutDate { get; set; }
    public int NumOfNights { get; set; }
    public int Days { get; set; }
    public int NumGuests { get; set; }
    public double TotalPrice { get; set; }
    public List<Service> ExtraServices { get; set; }
    public Room Room { get; set; }
}
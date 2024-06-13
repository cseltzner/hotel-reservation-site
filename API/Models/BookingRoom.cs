namespace API.Models;

public class BookingRoom
{
    public int Id { get; set; }
    public DateTime CheckInDate { get; set; }
    public DateTime CheckOutDate { get; set; }
    public int NumOfNights { get; set; }
    public int NumGuests { get; set; }
    public double TotalPrice { get; set; }
    public List<Service> ExtraServices { get; set; }

    public int RoomId { get; set; }
    public Room Room { get; set; }
}
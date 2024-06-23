namespace API.Dtos.CreateBookingDtos;

public class CreateBookingRoomDto
{
    public int RoomId { get; set; }
    public DateTime CheckInDate { get; set; }
    public DateTime CheckOutDate { get; set; }
    public int NumGuests { get; set; }
    public List<int> ExtraServiceIds { get; set; }
}
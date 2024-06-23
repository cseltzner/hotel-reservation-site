namespace API.Dtos.CreateBookingDtos;

public class CreateBookingDto
{
    public CreateGuestDto Guest { get; set; }
    public List<CreateBookingRoomDto> BookingRooms { get; set; }
    public int PaymentMethodId { get; set; }
    public string? OrderNotes { get; set; }
}
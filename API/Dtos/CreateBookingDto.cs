using System.ComponentModel.DataAnnotations;

namespace API.Dtos;

public class CreateBookingDto
{
    [Required]
    public CreateGuestDto Guest { get; set; }

    [Required]
    public List<CreateBookingRoomDto> BookingRooms { get; set; }

    [Required]
    public int PaymentMethodId { get; set; }

    public string? OrderNotes { get; set; }
}
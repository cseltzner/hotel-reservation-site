using System.ComponentModel.DataAnnotations;

namespace API.Dtos;

public class CreateBookingRoomDto
{
    [Required]
    public int RoomId { get; set; }

    [Required]
    public DateTime CheckInDate { get; set; }

    [Required]
    public DateTime CheckOutDate { get; set; }

    [Required]
    [Range(1, int.MaxValue)]
    public int NumGuests { get; set; }

    public List<int> ExtraServiceIds { get; set; }
}
namespace API.Dtos;

public class UpdateBookingDto
{
    public string? OrderNotes { get; set; }
    public UpdateGuestDto? Guest { get; set; }
}
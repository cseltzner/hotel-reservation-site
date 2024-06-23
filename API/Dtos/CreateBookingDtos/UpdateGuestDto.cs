using System.ComponentModel.DataAnnotations;

namespace API.Dtos;

public class UpdateGuestDto
{
    public string? Email { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? CompanyName { get; set; }
    public string? Country { get; set; }
    public string? Address { get; set; }
    public string? Address2 { get; set; }
    public string? City { get; set; }
    public string? State { get; set; }
    public string? Zip { get; set; }
    public string? Phone { get; set; }
}
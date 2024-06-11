using System.ComponentModel.DataAnnotations;

namespace API.Dtos;

public class CreateGuestDto
{
    [Required]
    [EmailAddress]
    public string Email { get; set; } = string.Empty;

    [Required]
    public string FirstName { get; set; } = string.Empty;

    [Required]
    public string LastName { get; set; } = string.Empty;

    public string? CompanyName { get; set; }

    [Required]
    public string Country { get; set; } = string.Empty;

    [Required]
    public string Address { get; set; } = string.Empty;

    public string? Address2 { get; set; } = string.Empty;

    [Required]
    public string City { get; set; } = string.Empty;

    [Required]
    public string State { get; set; } = string.Empty;

    [Required]
    public string Zip { get; set; } = string.Empty;

    [Required]
    [Phone]
    public string Phone { get; set; } = string.Empty;
}
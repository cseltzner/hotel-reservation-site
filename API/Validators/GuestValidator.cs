using API.Dtos.CreateBookingDtos;
using FluentValidation;

namespace API.Validators;

public class GuestValidator : AbstractValidator<CreateGuestDto>
{
    public GuestValidator()
    {
        RuleFor(g => g.Email).NotNull().NotEmpty()
            .WithErrorCode("Email_required")
            .WithMessage("Email field cannot be empty");
        RuleFor(g => g.Email).EmailAddress()
            .WithErrorCode("Email_invalid")
            .WithMessage("Invalid email address");

        RuleFor(g => g.FirstName).NotNull().NotEmpty()
            .WithErrorCode("FirstName_required")
            .WithMessage("First name field cannot be empty");

        RuleFor(g => g.LastName).NotNull().NotEmpty()
            .WithErrorCode("LastName_required")
            .WithMessage("Last name field cannot be empty");

        RuleFor(g => g.Country).NotNull().NotEmpty()
            .WithErrorCode("Country_required")
            .WithMessage("Country field cannot be empty");

        RuleFor(g => g.Address).NotNull().NotEmpty()
            .WithErrorCode("Address_required")
            .WithMessage("Address cannot be empty");

        RuleFor(g => g.City).NotNull().NotEmpty()
            .WithErrorCode("City_required")
            .WithMessage("City field cannot be empty");

        RuleFor(g => g.State).NotNull().NotEmpty()
            .WithErrorCode("State_required")
            .WithMessage("State field cannot be empty");

        RuleFor(g => g.Zip).NotNull().NotEmpty()
            .WithErrorCode("Zip_required")
            .WithMessage("Zip code field cannot be empty");
        RuleFor(g => g.Zip).Matches("^[0-9]{4}?[0-9]$|^[0-9]{4}?[0-9]-[0-9]{4}$")
            .WithErrorCode("Zip_invalid")
            .WithMessage("Invalid Zip code");

        RuleFor(g => g.Phone).NotNull().NotEmpty()
            .WithErrorCode("Phone_required")
            .WithMessage("Phone number field cannot be empty");
        RuleFor(g => g.Phone).Matches(@"^(?:\+1)?\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$")
            .WithErrorCode("Phone_invalid")
            .WithMessage("Invalid Phone number");
    }
}
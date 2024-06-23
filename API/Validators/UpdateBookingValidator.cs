using API.Dtos;
using FluentValidation;

namespace API.Validators;

public class UpdateBookingValidator : AbstractValidator<UpdateBookingDto>
{
    public UpdateBookingValidator()
    {
        RuleFor(b => b.Guest.Email).EmailAddress()
            .WithErrorCode("Email_invalid")
            .WithMessage("Email address is invalid");

        RuleFor(b => b.Guest.Zip).Matches("^[0-9]{4}?[0-9]$|^[0-9]{4}?[0-9]-[0-9]{4}$")
            .WithErrorCode("Zip_invalid")
            .WithMessage("Zip code is invalid");

        RuleFor(b => b.Guest.Phone).Matches(@"^(?:\+1)?\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$")
            .WithErrorCode("Phone_invalid")
            .WithMessage("Phone number is invalid");
    }
}
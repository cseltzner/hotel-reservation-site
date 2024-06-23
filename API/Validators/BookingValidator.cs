using API.Dtos.CreateBookingDtos;
using FluentValidation;

namespace API.Validators;

/// <summary>
/// Validator for CreateBookingDto objects.
/// </summary>
public class BookingValidator : AbstractValidator<CreateBookingDto>
{
    public BookingValidator()
    {
        RuleFor(b => b.Guest).NotNull()
            .WithErrorCode("Guest_required")
            .WithMessage("Guest property cannot be null");
        RuleFor(b => b.Guest)
            .SetValidator(new GuestValidator());

        RuleFor(b => b.BookingRooms).NotNull()
            .WithErrorCode("BookingRooms_required")
            .WithMessage("BookingRooms property cannot be null");
        RuleForEach(b => b.BookingRooms)
            .SetValidator(new BookingRoomValidator());

        RuleFor(b => b.PaymentMethodId).NotNull().NotEmpty()
            .WithErrorCode("PaymentMethodId_required")
            .WithMessage("PaymentMethodId field is required");
    }
}
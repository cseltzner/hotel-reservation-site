using API.Dtos.CreateBookingDtos;
using FluentValidation;

namespace API.Validators;

public class BookingRoomValidator : AbstractValidator<CreateBookingRoomDto>
{
    public BookingRoomValidator()
    {
        RuleFor(br => br.RoomId).NotNull().NotEmpty()
            .WithErrorCode("RoomId_required")
            .WithMessage("RoomId field is required");

        RuleFor(br => br.CheckInDate).NotNull().NotEmpty()
            .WithErrorCode("CheckInDate_required")
            .WithMessage("CheckInDate field is required");

        RuleFor(br => br.CheckOutDate).NotNull().NotEmpty()
            .WithErrorCode("CheckOutDate_required")
            .WithMessage("CheckOutDate field is required");

        RuleFor(br => br.NumGuests).NotNull().NotEmpty()
            .WithErrorCode("NumGuests_required")
            .WithMessage("NumGuests field is required");
        RuleFor(br => br.NumGuests).GreaterThanOrEqualTo(1)
            .WithErrorCode("NumGuests_invalid")
            .WithMessage("NumGuests must be greater than 0");
    }
}
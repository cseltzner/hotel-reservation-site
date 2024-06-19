using API.Dtos;
using API.Dtos.ResponseDtos;
using API.Models;

namespace API.Mapping;

public static class BookingMapping
{
    public static BookingDto MapBookingToDto(Booking booking)
    {
        return new BookingDto
        {
            Id = booking.Id,
            BookingCreatedDate = booking.BookingCreatedDate,
            Guest = MapGuestToDto(booking.Guest),
            BookingRooms = booking.BookingRooms,
            BookingTotal = booking.BookingTotal,
            PaymentMethod = booking.PaymentMethod,
            OrderNotes = booking.OrderNotes
        };
    }

    public static GuestDto MapGuestToDto(Guest guest)
    {
        return new GuestDto
        {
            Id = guest.Id,
            Address = guest.Address,
            Address2 = guest.Address2,
            City = guest.City,
            Country = guest.Country,
            Email = guest.Email,
            Phone = guest.Phone,
            State = guest.State,
            Zip = guest.Zip,
            CompanyName = guest.CompanyName,
            FirstName = guest.FirstName,
            LastName = guest.LastName
        };
    }

    public static Guest MapGuestDtoToGuest(CreateGuestDto guestDto)
    {
        return new Guest
        {
            Address = guestDto.Address,
            Address2 = guestDto.Address2,
            City = guestDto.City,
            Country = guestDto.Country,
            Email = guestDto.Email,
            Phone = guestDto.Phone,
            State = guestDto.State,
            Zip = guestDto.Zip,
            CompanyName = guestDto.CompanyName,
            FirstName = guestDto.FirstName,
            LastName = guestDto.LastName
        };
    }
}
using API.Models;

namespace API.ModelHelpers;

public static class BookingHelpers
{
    public static int CalculateNumOfNights(DateTime checkInDate, DateTime checkOutDate)
    {
        return DateOnly.FromDateTime(checkOutDate).DayNumber - DateOnly.FromDateTime(checkInDate).DayNumber;
    }

    public static double CalculateRoomTotalPrice(Room room, int numGuests, int numNights, List<Service> extraServices)
    {
        // Cost of all the room's extra services (cleaning fee, etc)
        var extraServicesCost = 0.0;
        extraServices.ForEach(service =>
        {
            extraServicesCost += service.Cost;
        });

        return (room.BasePrice + ((numGuests - 1) * room.AdditionalGuestPrice) + extraServicesCost) * numNights;
    }
}
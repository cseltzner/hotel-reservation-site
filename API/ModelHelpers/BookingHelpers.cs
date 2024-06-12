using API.Models;

namespace API.ModelHelpers;

public static class BookingHelpers
{
    /// <summary>
    /// Calculates number of nights stayed given the check in date and check out date
    /// </summary>
    /// <param name="checkInDate">DateTime of the check-in date</param>
    /// <param name="checkOutDate">DateTime of the check-out date</param>
    /// <returns>Int that represents the number of nights stayed</returns>
    public static int CalculateNumOfNights(DateTime checkInDate, DateTime checkOutDate)
    {
        return (checkOutDate - checkInDate).Days;
    }

    /// <summary>
    /// Calculates the total price of a BookingRoom given the room's cost properties
    /// </summary>
    /// <param name="room">Room to calculate total price of</param>
    /// <param name="numGuests">Total number of guests staying in the room</param>
    /// <param name="numNights">Total number of nights that the room will be occupied</param>
    /// <param name="extraServices">List of Services that the room receives</param>
    /// <returns></returns>
    public static double CalculateRoomTotalPrice(Room room, int numGuests, int numNights, List<Service> extraServices)
    {
        // Cost of all the room's extra services (cleaning fee, etc.)
        var extraServicesCost = 0.0;
        extraServices.ForEach(service =>
        {
            extraServicesCost += service.Cost;
        });

        if (numGuests < 1) throw new ArgumentException("numGuests must not be less than 1");
        if (numNights < 1) throw new ArgumentException("numNights must not be less than 1");

        return (room.BasePrice + ((numGuests - 1) * room.AdditionalGuestPrice) + extraServicesCost) * numNights;
    }

    /// <summary>
    /// Calculates the Booking's total cost given the list of rooms included with the booking
    /// </summary>
    /// <param name="rooms">List of rooms the Guest is booking</param>
    /// <returns></returns>
    public static double CalculateBookingTotal(List<BookingRoom> rooms)
    {
        var total = 0.0;
        rooms.ForEach(room =>
        {
            total += room.TotalPrice;
        });
        return total;
    }
}
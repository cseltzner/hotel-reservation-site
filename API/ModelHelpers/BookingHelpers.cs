namespace API.ModelHelpers;

public static class BookingHelpers
{
    public static int CalculateNumOfNights(DateTime checkInDate, DateTime checkOutDate)
    {
        return DateOnly.FromDateTime(checkOutDate).DayNumber - DateOnly.FromDateTime(checkInDate).DayNumber;
    }
}
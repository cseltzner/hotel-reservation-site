using API.ModelHelpers;
using API.Models;

namespace API.Tests.ModelHelpers;

public class BookingHelpersTest
{

    [Fact]
    public void calculateNumOfNights_returns2_whenPassedTwoDates48HoursApart()
    {
        var checkInDate = DateTime.Parse("2024-06-11T20:42:25.238Z");
        var checkOutDate = DateTime.Parse("2024-06-13T20:42:25.238Z");

        var result = BookingHelpers.CalculateNumOfNights(checkInDate, checkOutDate);

        var expectedResult = 2;
        Assert.Equal(expectedResult, result);
    }

    [Fact]
    public void calculateNumOfNights_returns2_whenPassedTwoDatesLessThan48HoursApart()
    {
        var checkInDate = DateTime.Parse("2024-06-11T20:42:25.238Z");
        // The checkOutDate is slightly less than 48 hours apart,
        // which should still count as 2 days even though it hasn't
        // been 48 hours apart
        var checkOutDate = DateTime.Parse("2024-06-13T20:41:25.238Z");

        var result = BookingHelpers.CalculateNumOfNights(checkInDate, checkOutDate);

        var expectedResult = 2;
        Assert.Equal(expectedResult, result);
    }

    [Fact]
    public void calculateNumOfNights_returns1_whenPassedTwoDatesLessThan24HoursApart()
    {
        var checkInDate = DateTime.Parse("2024-06-11T20:42:25.238Z");
        var checkOutDate = DateTime.Parse("2024-06-12T20:41:25.238Z"); // Date is less than 24 hours from checkin date

        var result = BookingHelpers.CalculateNumOfNights(checkInDate, checkOutDate);

        var expectedResult = 1;
        Assert.Equal(expectedResult, result);
    }

    [Fact]
    public void calculateRoomTotalPrice_returnsCorrectly()
    {
        // Base price = $100.00
        var room = new Room
        {
            BasePrice = 100.0,
            AdditionalGuestPrice = 50.0
        };

        // Plus 2 total guests (AKA 1 extra guest)
        // $100.00 + (50 * 1) = $150
        var numGuests = 2;

        // Plus 2 services worth $25.00 and $40.00
        // $150 + 25 + 40 = $215.00
        var roomServices = new List<Service>
        {
            new Service
            {
                Cost = 25.0
            },
            new Service
            {
                Cost = 40.0
            }
        };

        // Multiply all costs by 2 nights
        // $215.00 * 2 = $430.00 *Final price*
        var numNights = 2;


        var result = BookingHelpers.CalculateRoomTotalPrice(
            room: room,
            numNights: numNights,
            numGuests: numGuests,
            extraServices: roomServices
        );

        Assert.Equal(430.0, result);
    }

}
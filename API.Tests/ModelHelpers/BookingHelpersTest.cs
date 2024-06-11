using API.ModelHelpers;

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


}
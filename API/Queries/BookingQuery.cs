namespace API.Queries;

public class BookingQuery : FilterQuery
{
    // Add more filter query properties to filter bookings if desired

    public override string ToCacheKey()
    {
        var jsonString = System.Text.Json.JsonSerializer.Serialize(this);
        var md5HashBytes = System.Security.Cryptography.MD5.HashData(System.Text.Encoding.UTF8.GetBytes(jsonString));
        return Convert.ToHexString(md5HashBytes);
    }
}
namespace API.Queries;

public class RoomQuery : FilterQuery
{
    public string? RoomName { get; set; }
    public double? MaxPrice { get; set; }
    public double? MinPrice { get; set; }

    public override string ToCacheKey()
    {
        var jsonString = System.Text.Json.JsonSerializer.Serialize(this);
        var md5HashBytes = System.Security.Cryptography.MD5.HashData(System.Text.Encoding.UTF8.GetBytes(jsonString));
        return Convert.ToHexString(md5HashBytes);
    }
}
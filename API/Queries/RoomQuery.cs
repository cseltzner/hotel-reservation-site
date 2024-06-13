namespace API.Queries;

public class RoomQuery : FilterQuery
{
    public string? RoomName { get; set; }
    public double? MaxPrice { get; set; }
    public double? MinPrice { get; set; }
}
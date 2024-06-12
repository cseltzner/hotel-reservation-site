namespace API.Models;

public class Room
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public double BasePrice { get; set; }
    public double AdditionalGuestPrice { get; set; }
    public int MaxGuests { get; set; }
    public int NumBeds { get; set; }
    public string PrimaryImageUrl { get; set; } = string.Empty;
    public List<string> SecondaryImageUrls { get; set; } = new List<string>();
    public List<Feature> Features { get; set; } = new List<Feature>();
}
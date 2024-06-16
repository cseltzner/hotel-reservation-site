namespace API.Models;

public class Feature
{
    public int Id { get; set; }
    public string FeatureName { get; set; } = string.Empty;
    public List<Room> RoomsWithFeature { get; set; } = new List<Room>();
}
namespace API.Queries;

/// <summary>
/// Base query that can be inherited by more specific query objects. Includes sorting, filtering, and pagination properties.
/// </summary>
public class FilterQuery
{
    private const int MAX_PAGE_SIZE = 30;

    public string? SortBy { get; set; } = null;
    public bool IsDescending { get; set; } = false;
    public int PageNumber { get; set; } = 1;

    private int _pageSize = 15;
    public int PageSize
    {
        get => _pageSize;
        set => _pageSize = value > MAX_PAGE_SIZE ? MAX_PAGE_SIZE : value;
    }

    /// <summary>
    /// Generates a unique cache string based on the query's properties.
    /// </summary>
    /// <returns>Unique cache string</returns>
    public virtual string ToCacheKey()
    {
        var jsonString = System.Text.Json.JsonSerializer.Serialize(this);
        var md5HashBytes = System.Security.Cryptography.MD5.HashData(System.Text.Encoding.UTF8.GetBytes(jsonString));
        return Convert.ToHexString(md5HashBytes);
    }
}
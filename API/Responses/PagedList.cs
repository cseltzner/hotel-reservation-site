using Microsoft.EntityFrameworkCore;

namespace API.Responses;

/// <summary>
/// List object that includes pagination metadata including TotalCount, PageNumber, and PageSize
/// </summary>
public class PagedList<T> : List<T>
{
    public int TotalCount { get; private set; }
    public int PageNumber { get; private set; }
    public int PageSize { get; private set; }

    public PagedList(List<T> items, int count, int pageNumber, int pageSize)
    {
        AddRange(items);
        this.TotalCount = count;
        this.PageNumber = pageNumber;
        this.PageSize = pageSize;
    }

    /// <summary>
    /// Returns a PagedList based on a query.
    /// </summary>
    public static async Task<PagedList<T>> ToPagedList(
        IQueryable<T> query,
        int pageNumber,
        int pageSize
    )
    {
        var count = await query.CountAsync();
        var items = await query.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync();
        return new PagedList<T>(items, count, pageNumber, pageSize);
    }

}
using API.Context;
using API.Interfaces.Repositories;
using API.Models;
using API.Queries;
using Microsoft.EntityFrameworkCore;

namespace API.Repositories;

public class RoomRepository : IRoomRepository
{
    private readonly BookingContext _context;

    public RoomRepository(BookingContext context)
    {
        _context = context;
    }

    public async Task<List<Room>> GetRooms(RoomQuery query)
    {
        var rooms = _context.Rooms
            .AsQueryable();

        // Filter
        // Can be filtered by "RoomName", "MaxPrice", "MinPrice"
        if (!string.IsNullOrWhiteSpace(query.RoomName))
        {
            rooms = rooms.Where(room => room.Name.Contains(query.RoomName));
        }

        if (query.MaxPrice != null)
        {
            rooms = rooms.Where(room => room.BasePrice <= query.MaxPrice);
        }

        if (query.MinPrice != null)
        {
            rooms = rooms.Where(room => room.BasePrice >= query.MinPrice);
        }

        // Sort
        // Can be sorted by "Name", "Price", "MaxGuests", and "Beds" (not case sensitive)
        if (!string.IsNullOrWhiteSpace(query.SortBy))
        {
            if (query.SortBy.Equals("name", StringComparison.OrdinalIgnoreCase))
            {
                rooms = query.IsDescending
                    ? rooms.OrderByDescending(room => room.Name)
                    : rooms.OrderBy(room => room.Name);
            }
            if (query.SortBy.Equals("price", StringComparison.OrdinalIgnoreCase))
            {
                rooms = query.IsDescending
                    ? rooms.OrderByDescending(room => room.BasePrice)
                    : rooms.OrderBy(room => room.BasePrice);
            }
            if (query.SortBy.Equals("maxGuests", StringComparison.OrdinalIgnoreCase))
            {
                rooms = query.IsDescending
                    ? rooms.OrderByDescending(room => room.MaxGuests)
                    : rooms.OrderBy(room => room.MaxGuests);
            }
            if (query.SortBy.Equals("beds", StringComparison.OrdinalIgnoreCase))
            {
                rooms = query.IsDescending
                    ? rooms.OrderByDescending(room => room.NumBeds)
                    : rooms.OrderBy(room => room.NumBeds);
            }
        }

        // Pagination
        var skipNumber = (query.PageNumber - 1) * query.PageSize;

        return await rooms
            .Skip(skipNumber)
            .Take(query.PageSize)
            .ToListAsync();
    }

    public async Task<Room?> GetRoom(int id)
    {
        var room = await _context.Rooms
            .FirstOrDefaultAsync(room => room.Id == id);

        return room;
    }
}
using API.Dtos.ResponseDtos;
using API.Models;
using API.Responses;

namespace API.Mapping;

public static class RoomMapping
{
    public static RoomDto MapRoomToDto(Room room)
    {
        return new RoomDto
        {
            Id = room.Id,
            Name = room.Name,
            BasePrice = room.BasePrice,
            AdditionalGuestPrice = room.AdditionalGuestPrice,
            MaxGuests = room.MaxGuests,
            NumBeds = room.NumBeds,
            PrimaryImageUrl = room.PrimaryImageUrl,
            SecondaryImageUrls = room.SecondaryImageUrls,
            Features = room.Features
        };
    }

    public static PagedList<RoomDto> MapPagedRoomEntitiesToPagedRoomDtos(PagedList<Room> pagedRooms)
    {
        var roomDtoList = pagedRooms.Data.Select(room => MapRoomToDto(room));
        return new PagedList<RoomDto>(roomDtoList.ToList(), pagedRooms.TotalCount, pagedRooms.PageNumber, pagedRooms.PageSize);
    }
}
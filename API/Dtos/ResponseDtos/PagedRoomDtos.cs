using API.Responses;

namespace API.Dtos.ResponseDtos;

public class PagedRoomDtos : PagedList<RoomDto>
{
    public PagedRoomDtos(List<RoomDto> items, int count, int pageNumber, int pageSize) : base(items, count, pageNumber, pageSize)
    {
    }
}
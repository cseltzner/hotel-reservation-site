using API.Models;
using API.Queries;
using API.Responses;

namespace API.Interfaces.Repositories;

public interface IRoomRepository
{
    public Task<PagedList<Room>> GetRooms(RoomQuery query);
    public Task<Room?> GetRoom(int id);
    public Task<List<Room>> GetListOfRoomsByRoomIds(List<int> roomIds);
}
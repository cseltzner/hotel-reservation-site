using API.Models;
using API.Queries;

namespace API.Interfaces.Repositories;

public interface IRoomRepository
{
    public Task<List<Room>> GetRooms(RoomQuery query);
    public Task<Room?> GetRoom(int id);
}
using API.Interfaces.Repositories;
using API.Mapping;
using API.Queries;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RoomsController : ControllerBase
{
    private readonly IRoomRepository _roomRepository;

    public RoomsController(IRoomRepository roomRepository)
    {
        _roomRepository = roomRepository;
    }

    ////////////
    // Routes //
    ////////////

    /// <summary>
    /// @route   GET /api/rooms                                               <br/>
    /// @desc    Get all rooms as a paginated list                            <br/>
    /// @access  Public                                                       <br/>
    ///                                                                       <br/>
    /// @query   RoomName - Filter by room's name                             <br/>
    /// @query   MaxPrice - Only show rooms with base price below max price   <br/>
    /// @query   MinPrice - Only show rooms with base price above min price   <br/>
    /// @query   SortBy - case-insensitive                                    <br/>
    ///          values: "RoomName", "Price", "MaxGuests", "Beds"             <br/>                                        <br/>
    /// @query   IsDescending - Sorts in descending order                     <br/>
    /// @query   PageNumber - Page to return                                  <br/>
    /// @query   PageSize - Size of each page to return                       <br/>
    ///                                                                       <br/>
    /// @status  200 - returns Paged Room Dto list                            <br/>
    /// </summary>
    [HttpGet]
    public async Task<IActionResult> GetRooms([FromQuery] RoomQuery roomQuery)
    {
        var rooms = await _roomRepository.GetRooms(roomQuery);

        var roomDtos = RoomMapping.MapPagedRoomEntitiesToPagedRoomDtos(rooms);

        return StatusCode(200, roomDtos);
    }

    /// <summary>
    /// @route   GET /api/rooms/:id                     <br/>
    /// @desc    Get room by id                         <br/>
    /// @access  Public                                 <br/>
    ///                                                 <br/>
    /// @status  200 - returns RoomDto                  <br/>
    /// @status  404 - Room with given id not found     <br/>
    /// </summary>

    [HttpGet("{id}")]
    public async Task<IActionResult> GetRoom([FromRoute] int id)
    {
        var room = await _roomRepository.GetRoom(id);

        if (room == null) return StatusCode(404);

        var roomDto = RoomMapping.MapRoomToDto(room);

        return StatusCode(200, roomDto);
    }
}
const baseUrl = "http://localhost:7000/api"

export const apiUrls = {
    getRoomNames: (numRooms: number) => baseUrl + "/rooms/names?numRooms=" + numRooms,
}
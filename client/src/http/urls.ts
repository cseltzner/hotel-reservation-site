const baseUrl = "http://localhost:7000/api"

const getRooms = (query: GetRoomsQueries) => {
    const url = new URL(baseUrl + "/rooms");
    query.roomName && url.searchParams.append("roomName", query.roomName);
    query.maxPrice && url.searchParams.append("maxPrice", query.maxPrice);
    query.minPrice && url.searchParams.append("minPrice", query.minPrice);
    query.sortBy && url.searchParams.append("sortBy", query.sortBy);
    query.isDescending && url.searchParams.append("isDescending", query.isDescending.toString());
    query.pageNumber && url.searchParams.append("pageNumber", query.pageNumber.toString());
    query.pageSize && url.searchParams.append("pageSize", query.pageSize.toString());
    return url;
}

// All Urls
export const apiUrls = {
    getRoomNames: (numRooms: number) => baseUrl + "/rooms/names?numRooms=" + numRooms,
    getRooms,
    getRoom: (roomId: string) => baseUrl + "/rooms/" + roomId
}


// Query interfaces
export interface GetRoomsQueries {
    roomName?: string;
    maxPrice?: string;
    minPrice?: string;
    sortBy?: SortQuery
    isDescending?: boolean;
    pageNumber?: number;
    pageSize?: number;
}

export type SortQuery = "RoomName" | "Price" | "MaxGuests" | "Beds";

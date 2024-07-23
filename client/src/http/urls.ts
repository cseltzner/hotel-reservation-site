import { BookingRequest } from "../interfaces/requests/BookingRequest.ts";

const baseUrl = import.meta.env.VITE_API_BASE;

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

const getBookingsByEmailAndLastName = (email: string, lastName: string) => {
    const url = new URL(baseUrl + "/bookings/guest");
    url.searchParams.append("email", email);
    url.searchParams.append("lastName", lastName);
    return url;
}

// All Urls
export const apiUrls = {
    getRoomNames: (numRooms: number) => baseUrl + "/rooms/names?numRooms=" + numRooms,
    getRooms,
    getRoom: (roomId: string) => baseUrl + "/rooms/" + roomId,
    getServices: () => baseUrl + "/services",
    createBooking: () => baseUrl + "/bookings",
    getBookingById: (id: string) => baseUrl + `/bookings/${id}`,
    getBookingsByEmailAndLastName
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

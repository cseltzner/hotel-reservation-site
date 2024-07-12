import { BookingRoom } from "../models/BookingRoom.ts";

export interface BookingRoomRequest {
    roomId: number;
    checkInDate: Date;
    checkOutDate: Date;
    numGuests: number;
    extraServiceIds: number[];
}

export const mapBookingRoomToRequestObj = (bookingRoom: BookingRoom) => {
    const bookingRoomRequest: BookingRoomRequest = {
        roomId: bookingRoom.room.id,
        checkInDate: bookingRoom.checkInDate,
        checkOutDate: bookingRoom.checkOutDate,
        numGuests: bookingRoom.numGuests,
        extraServiceIds: bookingRoom.extraServiceIds.map(service => service.id)
    }

    return bookingRoomRequest;
}
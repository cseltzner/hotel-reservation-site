import { GuestRequest, mapGuestToRequestObj } from "./GuestRequest.ts";
import { BookingRoomRequest, mapBookingRoomToRequestObj } from "./BookingRoomRequest.ts";
import { Booking } from "../models/Booking.ts";

export interface BookingRequest {
    guest: GuestRequest;
    bookingRooms: BookingRoomRequest[];
    paymentMethodId: number;
    orderNotes?: string;
}

export const mapBookingToRequestObj = (booking: Booking) => {
    const bookingRequest: BookingRequest = {
        guest: mapGuestToRequestObj(booking.guest),
        bookingRooms: booking.bookingRooms.map(br => mapBookingRoomToRequestObj(br)),
        paymentMethodId: booking.paymentMethod.id,
        orderNotes: booking.orderNotes
    }

    return bookingRequest
}
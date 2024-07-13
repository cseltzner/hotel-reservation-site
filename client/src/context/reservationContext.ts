import { BookingRoom } from "../interfaces/models/BookingRoom.ts";
import { createContext, Dispatch, SetStateAction } from "react";

export interface ReservationContext {
    bookingRooms: BookingRoom[];
    addBookingRoom: (bookingRoom: BookingRoom) => void;
    removeBookingRoom: (id: number) => BookingRoom | null;
    clearBookingRooms: () => BookingRoom[];
}

export const ReservationContext = createContext<ReservationContext>({
    bookingRooms: [],
    addBookingRoom: (bookingRoom: BookingRoom) => {},
    removeBookingRoom: (id: number) => null,
    clearBookingRooms: () => []
});
import { useContext, useState } from "react";
import { ReservationContext } from "./reservationContext.ts";
import { BookingRoom } from "../interfaces/models/BookingRoom.ts";

export const useReservationContext = () => {
    return useContext(ReservationContext);
}

export const useReservationContextDefaults = () => {
    const [bookingRooms, setBookingRooms] = useState<BookingRoom[]>([]);

    const addBookingRoom = (bookingRoom: BookingRoom) => {
        setBookingRooms(prevState => {
            return [...prevState, bookingRoom]
        })
    }

    const removeBookingRoom = (id: number) => {
        const bookingRoomIndex = bookingRooms.findIndex(br => br.id === id);
        const bookingRoom = bookingRoomIndex !== -1
            ? bookingRooms[bookingRoomIndex]
            : null;

        setBookingRooms(prevState => {
            return prevState.filter(br => br.id !== id)
        })

        return bookingRoom
    }

    const clearBookingRooms = () => {
        const bookingRoomsCopy = bookingRooms.map(br => br);
        setBookingRooms([]);
        return bookingRoomsCopy;
    }

    const defaults: ReservationContext = {
        bookingRooms,
        addBookingRoom,
        removeBookingRoom,
        clearBookingRooms
    }

    return defaults
}
import { useContext, useEffect, useState } from "react";
import { ReservationContext } from "./reservationContext.ts";
import { BookingRoom } from "../interfaces/models/BookingRoom.ts";

export const useReservationContext = () => {
    return useContext(ReservationContext);
}

export const useReservationContextDefaults = () => {
    const [bookingRooms, setBookingRooms] = useState<BookingRoom[]>([]);

    // Set state on startup
    useEffect(() => {
        const localStorageBookingRooms = localStorage.getItem("bookingRooms");
        if (localStorageBookingRooms !== null) {
            const br: BookingRoom[] = JSON.parse(localStorageBookingRooms);
            setBookingRooms(br);
        }
    }, [])

    const addBookingRoom = (bookingRoom: BookingRoom) => {
        setBookingRooms(prevState => {
            const newBookingRooms = [...prevState, bookingRoom];
            localStorage.setItem("bookingRooms", JSON.stringify(newBookingRooms));
            return newBookingRooms;
        })
    }

    const removeBookingRoom = (id: string) => {
        const bookingRoomIndex = bookingRooms.findIndex(br => br.id === id);
        const bookingRoom = bookingRoomIndex !== -1
            ? bookingRooms[bookingRoomIndex]
            : null;

        setBookingRooms(prevState => {
            const newBookingRooms = prevState.filter(br => br.id !== id);
            localStorage.setItem("bookingRooms", JSON.stringify(newBookingRooms));
            return newBookingRooms;
        })

        return bookingRoom
    }

    const clearBookingRooms = () => {
        const bookingRoomsCopy = bookingRooms.map(br => br);
        setBookingRooms([]);
        localStorage.setItem("bookingRooms", JSON.stringify([]))
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
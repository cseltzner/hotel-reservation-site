import { intervalToDuration } from "date-fns";
import { BookingRoom } from "../interfaces/models/BookingRoom.ts";

export const calculateNumNights = (checkinDate: Date, checkoutDate: Date) => {
    return intervalToDuration({
        start: checkinDate,
        end: checkoutDate
    }).days || 0;
}

export const calculateRoomPriceEstimate = (bookingRoom: BookingRoom) => {
    let extraServicesCost = 0;
    bookingRoom.extraServices.forEach(service => extraServicesCost += service.cost);
    return (bookingRoom.room.basePrice + (bookingRoom.room.additionalGuestPrice * (bookingRoom.numGuests - 1)) + extraServicesCost) * calculateNumNights(bookingRoom.checkInDate, bookingRoom.checkOutDate)
}

export const calculateTotalPriceEstimate = (bookingRooms: BookingRoom[]) => {
    let totalPrice = 0;
    bookingRooms.forEach(br => {
        totalPrice += calculateRoomPriceEstimate(br);
    })
    return totalPrice;
}
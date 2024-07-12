import { BookingRoom } from "./BookingRoom.ts";
import { Guest } from "./Guest.ts";
import { PaymentMethod } from "./PaymentMethod.ts";

export interface Booking {
    id: number;
    bookingCreatedDate: Date;
    bookingRooms: BookingRoom[];
    bookingTotal: number;
    orderNotes?: string;
    guest: Guest;
    paymentMethod: PaymentMethod;
}
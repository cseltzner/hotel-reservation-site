import { Room } from "./Room.ts";
import { Service } from "./Service.ts";

export interface BookingRoom {
    id: number;
    room: Room;
    checkInDate: Date;
    checkOutDate: Date;
    numGuests: number;
    extraServices: Service[]
}
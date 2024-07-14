import { Room } from "./Room.ts";
import { Service } from "./Service.ts";

export interface BookingRoom {
    id: string;
    room: Room;
    checkInDate: Date;
    checkOutDate: Date;
    numGuests: number;
    extraServices: Service[]
}
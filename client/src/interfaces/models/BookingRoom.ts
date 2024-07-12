import { Room } from "./Room.ts";
import { Service } from "./Service.ts";

export interface BookingRoom {
    room: Room;
    checkInDate: Date;
    checkOutDate: Date;
    numGuests: number;
    extraServiceIds: Service[]
}
import { Guest } from "../models/Guest.ts";

export interface GuestRequest {
    email: string;
    firstName: string;
    lastName: string;
    companyName?: string;
    country: string;
    address: string;
    address2?: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
}

export const mapGuestToRequestObj = (guest: Guest) => {
    const guestRequest: GuestRequest = {
        email: guest.email,
        firstName: guest.firstName,
        lastName: guest.lastName,
        companyName: guest.companyName,
        country: guest.country,
        address: guest.address,
        address2: guest.address2,
        city: guest.city,
        state: guest.state,
        zip: guest.zip,
        phone: guest.phone
    }

    return guestRequest;
}
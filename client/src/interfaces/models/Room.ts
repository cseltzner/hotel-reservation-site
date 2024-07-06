import { Feature } from "./Feature.ts";


export interface Room {
    id: number;
    name: string;
    basePrice: number;
    additionalGuestPrice: number;
    maxGuests: number;
    numBeds: number;
    primaryImageUrl: string;
    secondaryImageUrls: string[];
    features: Feature[];
}
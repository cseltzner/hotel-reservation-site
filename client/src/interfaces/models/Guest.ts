export interface Guest {
    id: number;
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
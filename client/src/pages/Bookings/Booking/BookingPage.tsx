import styles from "./BookingPage.module.scss"
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiUrls } from "../../../http/urls.ts";
import { Booking } from "../../../interfaces/models/Booking.ts";
import BookingComponent from "../../../components/Booking/BookingComponent.tsx";
import { BookingSearchState } from "../BookingSearchState.ts";

const BookingPage = () => {
    const navigate = useNavigate();
    const bookingSearchState: BookingSearchState | undefined = useLocation().state;
    const bookingId = useParams().id;
    const [booking, setBooking] = useState<Booking | undefined>();

    useEffect(() => {
        if (!bookingId) navigate("/not-found");

        const fetchBooking = async () => {
            const response = await fetch(apiUrls.getBookingById(bookingId!));
            if (response.status === 404) navigate("/not-found");
            setBooking(await response.json());
        }

        fetchBooking();
    }, [bookingId]);

    const onReturn = () => {
        navigate("/bookings", {
            state: bookingSearchState
        })
    }

    return (
        <main className={styles.bookingPage}>
            <div className="container">
                <h1>Your Order</h1>
                {booking && (
                    <BookingComponent booking={booking}/>
                )}
                <button className={styles.returnButton} onClick={onReturn}>Return</button>
            </div>
        </main>
    );
};

export default BookingPage;
import styles from "./CheckoutSuccessPage.module.scss";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Booking } from "../../interfaces/models/Booking.ts";
import { format } from "date-fns";
import {
    calculateNumNights,
    calculateRoomPriceEstimate,
    calculateTotalPriceEstimate
} from "../../helpers/bookingHelpers.ts";
import { useEffect } from "react";
import BookingComponent from "../../components/Booking/BookingComponent.tsx";

const CheckoutSuccessPage = () => {
    const navigate = useNavigate();
    const booking: Booking = useLocation().state;

    useEffect(() => {
        if (!booking) navigate("/");
        document.title = "Thank you | Alpine Luxury Suites"
    }, []);

    return (
        <main className={styles.successPage}>
            {booking && (
                <div className="container">
                    <h1>Thank you for your order.</h1>
                    <BookingComponent booking={booking}/>
                    <NavLink to="/" className={styles.returnButton}>Return Home</NavLink>
                </div>
            )}
        </main>
    );
};

export default CheckoutSuccessPage;
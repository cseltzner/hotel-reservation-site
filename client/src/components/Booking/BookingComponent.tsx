import styles from "./BookingComponent.module.scss";
import { format } from "date-fns";
import {
    calculateNumNights,
    calculateRoomPriceEstimate,
    calculateTotalPriceEstimate
} from "../../helpers/bookingHelpers.ts";
import { Booking } from "../../interfaces/models/Booking.ts";

interface Props {
    booking: Booking
}

const currencyFormatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
})

const BookingComponent = ({booking}: Props) => {
    console.log(booking);
    return (
        <div className={styles.booking}>
            <div className={styles.bookingDetailsContainer}>
                <p className={styles.bookingDetail}>Order Number: <span
                    className={styles.bookingDetailData}>{booking.id}</span></p>
                <p className={styles.bookingDetail}>Total: <span
                    className={styles.bookingDetailData}>{currencyFormatter.format(booking.bookingTotal)}</span>
                </p>
                <p className={styles.bookingDetail}>Payment Method: <span
                    className={styles.bookingDetailData}>{booking.paymentMethod.name}</span></p>
            </div>
            <h2>Order Details</h2>
            <ul className={styles.orderList}>
                {booking.bookingRooms.map(br => (
                    <li key={br.id} className={styles.orderItem}>
                        <div className={styles.orderItemDetails}>
                            <a href={`/rooms/${br.room.id}`}>{br.room.name}</a>
                            <p>{format(br.checkInDate, "MMMM d")} -
                                {format(br.checkOutDate, "MMMM d")}
                                <span
                                    className={styles.orderItemDays}>({calculateNumNights(br.checkInDate, br.checkOutDate)} day{calculateNumNights(br.checkInDate, br.checkOutDate) > 1 ? "s" : ""})</span>
                            </p>
                            <p>{`${br.numGuests} Guest${br.numGuests > 1 ? "s" : ""}`}</p>
                            <p>
                                {br.extraServices.map((service, index) => (
                                    <span key={service.id}
                                          className={styles.roomServices}>{service.name}{index < br.extraServices.length - 1 ? ", " : "."}</span>
                                ))}
                            </p>
                        </div>
                        <div
                            className={styles.orderItemPrice}>{currencyFormatter.format(calculateRoomPriceEstimate(br))}</div>
                    </li>
                ))}
            </ul>
            <div className={styles.totalsContainer}>
                <p>Subtotal</p>
                <p>{currencyFormatter.format(calculateTotalPriceEstimate(booking.bookingRooms))}</p>
            </div>
            <div className={styles.totalsContainer}>
                <p>Total</p>
                <p className={styles.bold}>{currencyFormatter.format(calculateTotalPriceEstimate(booking.bookingRooms))}</p>
            </div>
        </div>
    );
};

export default BookingComponent;

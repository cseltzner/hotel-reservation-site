import styles from "./CartPage.module.scss";
import { useReservationContext } from "../../context/useReservationContext.ts";
import Close from "../../components/Icons/Close.tsx";
import { format, intervalToDuration } from "date-fns";
import { BookingRoom } from "../../interfaces/models/BookingRoom.ts";

const CartPage = () => {
    const {bookingRooms, removeBookingRoom, clearBookingRooms} = useReservationContext();

    const calculateNumNights = (checkinDate: Date, checkoutDate: Date) => {
        return intervalToDuration({
            start: checkinDate,
            end: checkoutDate
        }).days || 0;
    }

    const calculatePriceEstimate = (bookingRoom: BookingRoom) => {
        let extraServicesCost = 0;
        bookingRoom.extraServices.forEach(service => extraServicesCost += service.cost);
        return (bookingRoom.room.basePrice + (bookingRoom.room.additionalGuestPrice * (bookingRoom.numGuests - 1)) + extraServicesCost) * calculateNumNights(bookingRoom.checkInDate, bookingRoom.checkOutDate)
    }

    const onDeleteClicked = (id: string) => {
        removeBookingRoom(id);
    }

    return (
        <main className={styles.cartPage}>
            <div className="container">
                <h1>Cart</h1>
                {bookingRooms.length > 0 && (
                    <table className={styles.cartTable}>
                        <thead>
                        <tr>
                            <th>{/* Blank, header for delete button */}</th>
                            <th>Room</th>
                            <th className={styles.smHidden}>Details</th>
                            <th className={styles.smHidden}>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {bookingRooms.map(bookingRoom => (
                            <tr className={styles.roomRow}>
                                <td>
                                    <button onClick={() => onDeleteClicked(bookingRoom.id)}>
                                        <Close className={styles.deleteBtn}/>
                                    </button>
                                </td>
                                <td className={styles.tableImg}>
                                    <a href={`/rooms/${bookingRoom.room.id}`} className={styles.tableImgAnchor}>
                                        <img src={bookingRoom.room.primaryImageUrl} alt={bookingRoom.room.name}/>
                                    </a>
                                </td>
                                <td className={styles.tableDetails}>
                                    <a href={`/rooms/${bookingRoom.room.id}`}>
                                        <h2 className={styles.roomName}>{bookingRoom.room.name}</h2>
                                    </a>
                                    <p className={`${styles.roomDetails} ${styles.smHidden}`}>
                                        {format(bookingRoom.checkInDate, "MMMM d")} -
                                        {format(bookingRoom.checkOutDate, "MMMM d")}
                                        <span
                                            className={styles.days}>({calculateNumNights(bookingRoom.checkInDate, bookingRoom.checkOutDate)} day{calculateNumNights(bookingRoom.checkInDate, bookingRoom.checkOutDate) > 1 ? "s" : ""})</span>

                                    </p>
                                    <p className={`${styles.roomDetails} ${styles.smHidden}`}>
                                        {bookingRoom.numGuests} Guest{bookingRoom.numGuests > 1 ? "s" : ""}
                                    </p>
                                    <p className={`${styles.roomDetails} ${styles.smHidden}`}>
                                        {bookingRoom.extraServices.length > 0 && (
                                            <span className={styles.extraServices}>Extra Services:</span>)}
                                        {bookingRoom.extraServices.map((service, index) => (
                                            <span key={service.id}
                                                  className={styles.roomServices}>{service.name}{index < bookingRoom.extraServices.length - 1 && ", "}</span>
                                        ))}
                                    </p>
                                </td>
                                <td className={styles.roomDetails}>
                                    <p className={styles.roomPrice}>
                                        ${calculatePriceEstimate(bookingRoom)}
                                    </p>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </main>
    );
};

export default CartPage;

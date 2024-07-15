import styles from "./CartPage.module.scss";
import { useReservationContext } from "../../context/useReservationContext.ts";
import Close from "../../components/Icons/Close.tsx";
import { format, intervalToDuration } from "date-fns";
import { BookingRoom } from "../../interfaces/models/BookingRoom.ts";

const CartPage = () => {
    const {bookingRooms, removeBookingRoom, clearBookingRooms} = useReservationContext();

    const currencyFormatter = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    })

    const calculateNumNights = (checkinDate: Date, checkoutDate: Date) => {
        return intervalToDuration({
            start: checkinDate,
            end: checkoutDate
        }).days || 0;
    }

    const calculateRoomPriceEstimate = (bookingRoom: BookingRoom) => {
        let extraServicesCost = 0;
        bookingRoom.extraServices.forEach(service => extraServicesCost += service.cost);
        return (bookingRoom.room.basePrice + (bookingRoom.room.additionalGuestPrice * (bookingRoom.numGuests - 1)) + extraServicesCost) * calculateNumNights(bookingRoom.checkInDate, bookingRoom.checkOutDate)
    }

    const calculateTotalPriceEstimate = () => {
        let totalPrice = 0;
        bookingRooms.forEach(br => {
            totalPrice += calculateRoomPriceEstimate(br);
        })
        return totalPrice;
    }

    const onDeleteClicked = (id: string) => {
        removeBookingRoom(id);
    }

    return (
        <main className={styles.cartPage}>
            <div className="container">
                <h1>Cart</h1>
                {/* List populated with bookingRooms */}
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
                                        {currencyFormatter.format(calculateRoomPriceEstimate(bookingRoom))}
                                    </p>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
                {/* Empty list styles */}
                {bookingRooms.length === 0 && (
                    <div className={styles.emptyCart}>
                        <h2>Your Cart Is Empty</h2>
                        <p>Enjoy browsing our wide range of suites for your next visit.</p>
                        <a href="/rooms">View Rooms</a>
                    </div>
                )}
                {/* Totals container */}
                {bookingRooms.length > 0 && (
                    <div className={styles.totalsContainer}>
                        <h3>Total Price</h3>
                        <div className={styles.totalsRow}>
                            <p>Subtotal</p>
                            <p>{currencyFormatter.format(calculateTotalPriceEstimate())}</p>
                        </div>
                        <div className={styles.totalsRow}>
                            <p>Tax</p>
                            <p>$0.00</p>
                        </div>
                        <div className={styles.totalsRow}>
                            <p>Total</p>
                            <p>{currencyFormatter.format(calculateTotalPriceEstimate())}</p>
                        </div>
                        <button className={styles.checkoutBtn}>Checkout</button>
                    </div>
                )}
            </div>
        </main>
    );
};

export default CartPage;

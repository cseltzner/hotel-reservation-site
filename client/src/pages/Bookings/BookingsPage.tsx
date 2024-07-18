import styles from "./BookingsPage.module.scss";
import { useForm } from "react-hook-form";
import Spinner from "../../components/LoadingSpinner/Spinner.tsx";
import { useState } from "react";
import { Booking } from "../../interfaces/models/Booking.ts";
import { apiUrls } from "../../http/urls.ts";
import { PagedList } from "../../interfaces/PagedList.ts";
import { format } from "date-fns";
import ChevronRight from "../../components/Icons/ChevronRight.tsx";
import { useLocation, useNavigate } from "react-router-dom";
import { BookingSearchState } from "./BookingSearchState.ts";

interface Inputs {
    id: string;
    lastName: string;
    email: string;
}

const BookingsPage = () => {
    const navigate = useNavigate();
    const [bookingSearchState, setBookingSearchState] = useState<BookingSearchState | undefined>(useLocation().state)
    const {register, handleSubmit} = useForm<Inputs>({
        defaultValues: {
            id: bookingSearchState?.id,
            lastName: bookingSearchState?.lastName,
            email: bookingSearchState?.email
        }
    })
    const [submitLoading, setSubmitLoading] = useState(false);
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [hasSearched, setHasSearched] = useState(false);
    const [formError, setFormError] = useState(false);

    const currencyFormatter = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    })

    const onSubmit = async ({id, email, lastName}: Inputs) => {
        setSubmitLoading(true);

        // If any input groups are empty
        if (id.trim() === "" && (email.trim() === "" || lastName.trim() === "")) {
            setFormError(true);
            setSubmitLoading(false);
            return;
        }

        setBookingSearchState({id, email, lastName})

        // Use Email and Last name to search if user left Id field empty
        // (Search via Id takes preference if both input groups are filled)
        if (id.trim() === "") {
            const response = await fetch(apiUrls.getBookingsByEmailAndLastName(email, lastName));
            if (response.status === 404) setBookings([]);
            if (response.status === 200) {
                const paginatedBookings: PagedList<Booking> = await response.json();
                setBookings(paginatedBookings.data);
            }
        }
        // Use bookingId to search (default position if both input groups are filled)
        else {
            const response = await fetch(apiUrls.getBookingById(id));
            if (response.status === 404) setBookings([]);
            if (response.status === 200) {
                const booking: Booking = await response.json()
                setBookings([booking]);
            }
        }

        setFormError(false);

        setSubmitLoading(false);
        setHasSearched(true);
    }

    const onBookingClicked = (id: number) => {
        navigate(`/bookings/${id}`, {
            state: bookingSearchState
        })
    }

    return (
        <main className={styles.bookingsPage}>
            <div className="container">
                <h1>View My Bookings</h1>
                <form className={styles.bookingForm} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.formGrid}>
                        <div className={styles.formGroup}>
                            <div className={styles.textInput}>
                                <label htmlFor="id">Booking Id</label>
                                <input type="text"
                                       id="id"
                                       {...register("id")}
                                />
                            </div>
                        </div>
                        <p className={styles.formDivider}>Or</p>
                        <div className={styles.formGroup}>
                            <div className={styles.textInput}>
                                <label htmlFor="email">Email</label>
                                <input type="text"
                                       id="email"
                                       {...register("email")}
                                />
                            </div>
                            <div className={styles.textInput}>
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text"
                                       id="lastName"
                                       {...register("lastName")}
                                />
                            </div>
                        </div>
                    </div>
                    {formError && (<p className={styles.error}>Please fill in the fields above</p>)}
                    <button className={styles.formSubmitBtn} disabled={submitLoading} data-loading={submitLoading}>
                        <p>Search</p>{submitLoading && <Spinner position="absolute" size={7} color="#fff"/>}</button>
                </form>
                <div className={styles.bookingResponse}>
                    {/* BookingList if Bookings are found */}
                    {!submitLoading && hasSearched && bookings?.length > 0 && (
                        <ul className={styles.bookingsList}>
                            {bookings.map(booking => (
                                <li key={booking.id} className={styles.bookingListItem}>
                                    <button onClick={() => onBookingClicked(booking.id)} className={styles.bookingDetailsContainer}>
                                        <div className={styles.bookingDetailsGrid}>
                                            <p className={styles.bookingDetail}>Order Number: <span
                                                className={styles.bookingDetailData}>{booking.id}</span></p>
                                            <p className={styles.bookingDetail}>Date Booked: <span className={styles.bookingDetailData}>{format(booking.bookingCreatedDate, "MMMM dd, yyyy")}</span></p>
                                            <p className={styles.bookingDetail}>Total: <span
                                                className={styles.bookingDetailData}>{currencyFormatter.format(booking.bookingTotal)}</span>
                                            </p>
                                            <p className={styles.bookingDetail}>Payment Method: <span
                                                className={styles.bookingDetailData}>{booking.paymentMethod.name}</span></p>
                                        </div>
                                        <div className={styles.chevron}>
                                            <ChevronRight />
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Bookings not found */}
                    {!submitLoading && hasSearched && bookings?.length <= 0 && (
                        <div className={styles.bookingsNotFoundContainer}>
                            <h2>No bookings found</h2>
                            <p>Please check the spelling on your search terms and try again.</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default BookingsPage;
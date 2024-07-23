import styles from "./CheckoutPage.module.scss";
import { useReservationContext } from "../../context/useReservationContext.ts";
import { useForm } from "react-hook-form";
import { states, State } from "../../helpers/states.ts";
import { format } from "date-fns";
import {
    calculateNumNights,
    calculateRoomPriceEstimate,
    calculateTotalPriceEstimate
} from "../../helpers/bookingHelpers.ts";
import { BookingRequest } from "../../interfaces/requests/BookingRequest.ts";
import { mapBookingRoomToRequestObj } from "../../interfaces/requests/BookingRoomRequest.ts";
import { apiUrls } from "../../http/urls.ts";
import { useEffect, useState } from "react";
import { ValidationError } from "../../interfaces/errors/validationError.ts";
import { NavLink, useNavigate } from "react-router-dom";
import { Booking } from "../../interfaces/models/Booking.ts";
import Spinner from "../../components/LoadingSpinner/Spinner.tsx";

interface Inputs {
    email: string;
    firstName: string;
    lastName: string;
    companyName?: string;
    country: string;
    address: string;
    address2?: string;
    city: string;
    state: State;
    zip: string;
    phone: string;
    orderNotes?: string;
    paymentMethodId: number;
}

const emailRegex = /\S+@\S+./;
const phoneRegex = /^(?:\+1)?\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
const zipRegex = /^[0-9]{4}?[0-9]$|^[0-9]{4}?[0-9]-[0-9]{4}$/;

const CheckoutPage = () => {
    const navigate = useNavigate();
    const {bookingRooms, clearBookingRooms} = useReservationContext();
    const {register, handleSubmit, reset, formState: {errors}} = useForm<Inputs>({mode: "onBlur"})
    const [submitLoading, setSubmitLoading] = useState(false);
    const [validationError, setValidationError] = useState("");

    useEffect(() => {
        document.title = "Checkout | Alpine Luxury Suites"
    }, []);

    const currencyFormatter = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    })

    const onSubmit = async (inputs: Inputs) => {
        setSubmitLoading(true);

        const booking: BookingRequest = {
            guest: {
                firstName: inputs.firstName,
                lastName: inputs.lastName,
                email: inputs.email,
                companyName: inputs.companyName,
                address: inputs.address,
                address2: inputs.address2,
                city: inputs.city,
                state: inputs.state,
                zip: inputs.zip,
                country: inputs.country,
                phone: inputs.phone
            },
            bookingRooms: bookingRooms.map(br => mapBookingRoomToRequestObj(br)),
            orderNotes: inputs.orderNotes,
            paymentMethodId: inputs.paymentMethodId
        }

        const response = await fetch(apiUrls.createBooking(), {
            method: "POST",
            body: JSON.stringify(booking),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.status === 400) {
            const error: ValidationError = await response.json();
            setValidationError(error.errors[0].errorMessage);
        }

        if (response.status === 200) {
            const bookingResponse: Booking = await response.json();
            clearBookingRooms();
            navigate("/booking-success", {
                state: bookingResponse
            })
        }

        setSubmitLoading(false);
    }

    return (
        <main className={styles.checkoutPage}>
            <div className="container">
                <h1>Checkout</h1>
                <form className={styles.checkoutForm} onSubmit={handleSubmit(onSubmit)}>
                    <h2>Billing Details</h2>
                    <div className={styles.inputGrid}>
                        <div className={styles.gridCol}>
                            {/* First Name */}
                            <div className={styles.textInput}>
                                <label htmlFor="firstName">First Name</label>
                                <input type="text"
                                       id="firstName"
                                       {...register("firstName", {
                                           required: {value: true, message: "First name is required"}
                                       })}
                                       data-error={errors.firstName?.message !== undefined}
                                />
                                <small className={styles.inputError}>{errors.firstName?.message}</small>
                            </div>
                            {/* Last Name */}
                            <div className={styles.textInput}>
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text"
                                       id="lastName"
                                       {...register("lastName", {
                                           required: {value: true, message: "Last name is required"}
                                       })}
                                       data-error={errors.lastName?.message !== undefined}
                                />
                                <small className={styles.inputError}>{errors.lastName?.message}</small>
                            </div>
                            {/* Company Name */}
                            <div className={styles.textInput}>
                                <label htmlFor="companyName">Company Name (optional)</label>
                                <input type="text"
                                       id="companyName"
                                       {...register("companyName")}
                                       data-error={errors.companyName?.message !== undefined}
                                />
                                <small className={styles.inputError}>{errors.companyName?.message}</small>
                            </div>
                            {/* Email */}
                            <div className={styles.textInput}>
                                <label htmlFor="email">Email Address</label>
                                <input type="email"
                                       id="email"
                                       {...register("email", {required: {value: true, message: "Email is required"}, pattern: {value: emailRegex, message: "Please enter a valid email address"}})}
                                       data-error={errors.email?.message !== undefined}
                                />
                                <small className={styles.inputError}>{errors.email?.message}</small>
                            </div>
                            {/* Address */}
                            <div className={styles.textInput}>
                                <label htmlFor="address">Address</label>
                                <input type="text"
                                       id="address"
                                       {...register("address", {
                                           required: {value: true, message: "Address is required"}
                                       })}
                                       data-error={errors.address?.message !== undefined}
                                />
                                <small className={styles.inputError}>{errors.address?.message}</small>
                            </div>
                            {/* Address 2 */}
                            <div className={styles.textInput}>
                                <label htmlFor="address2">Apartment, Suite, etc. (optional)</label>
                                <input type="text"
                                       id="address2"
                                       {...register("address2")}
                                       data-error={errors.address2?.message !== undefined}
                                />
                                <small className={styles.inputError}>{errors.address2?.message}</small>
                            </div>
                            {/* City */}
                            <div className={styles.textInput}>
                                <label htmlFor="city">City</label>
                                <input type="text"
                                       id="city"
                                       {...register("city", {required: {value: true, message: "City is required"}})}
                                       data-error={errors.city?.message !== undefined}
                                />
                                <small className={styles.inputError}>{errors.city?.message}</small>
                            </div>
                            {/* State (Select) */}
                            <div className={styles.selectContainer}>
                                <label htmlFor="state">State</label>
                                <select
                                    className={styles.select}
                                    {...register("state", {required: {value: true, message: "State is required"}})}
                                    id="state"
                                    data-error={errors.state?.message !== undefined}
                                >
                                    <option value={""}>Choose a state</option>
                                    {states.map(state => (
                                        <option key={state} value={state}>{state}</option>
                                    ))}
                                </select>
                                <small className={styles.inputError}>{errors.state?.message}</small>
                            </div>
                            {/* Zip Code */}
                            <div className={styles.textInput}>
                                <label htmlFor="zip">Zip Code</label>
                                <input type="text"
                                       id="zip"
                                       {...register("zip", {required: {value: true, message: "Zip code is required"}, pattern: {value: zipRegex, message: "Please enter a valid Zip code"}})}
                                       data-error={errors.zip?.message !== undefined}
                                />
                                <small className={styles.inputError}>{errors.zip?.message}</small>
                            </div>
                            {/* Country */}
                            <div className={styles.textInput}>
                                <label htmlFor="country">Country</label>
                                <input type="text"
                                       id="country"
                                       {...register("country", {
                                           required: {value: true, message: "Country is required"}
                                       })}
                                       data-error={errors.country?.message !== undefined}
                                />
                                <small className={styles.inputError}>{errors.country?.message}</small>
                            </div>
                            {/* Phone */}
                            <div className={styles.textInput}>
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel"
                                       id="phone"
                                       {...register("phone", {required: {value: true, message: "Phone number is required"}, pattern: {value: phoneRegex, message: "Please enter a valid phone number"}})}
                                       data-error={errors.phone?.message !== undefined}
                                />
                                <small className={styles.inputError}>{errors.phone?.message}</small>
                            </div>
                        </div>
                        <div className={styles.gridCol}>
                            {/* Payment Methods*/}
                            <div className={styles.payments}>
                                <div className={styles.paymentGroup}>
                                    <div className={styles.paymentHeader}>
                                        <input
                                            type="radio"
                                            id="onSite"
                                            defaultChecked
                                            value={1}
                                            {...register("paymentMethodId")}
                                        />
                                        <label htmlFor="onSite">Pay On Site</label>
                                    </div>
                                    <p>Pay with cash or credit card when you check in</p>
                                </div>
                                <div className={styles.paymentGroup}>
                                    <div className={styles.paymentHeader}>
                                        <input
                                            type="radio"
                                            id="check"
                                            value={2}
                                            {...register("paymentMethodId")}
                                        />
                                        <label htmlFor="check">Pay Via Check</label>
                                    </div>
                                    <p>Send a check to 123 State Rd, NY 12345 prior to your visit</p>
                                </div>
                            </div>
                            {/* Order Notes */}
                            <div className={styles.textareaGroup}>
                                <label htmlFor="notes">Order Notes (optional)</label>
                                <textarea {...register("orderNotes")} id="notes"
                                          placeholder="Please let us know of any special requests or accommodations you may need."></textarea>
                            </div>
                            {/* Order details */}
                            <div className={styles.orderContainer}>
                                <h3>Your Order</h3>
                                <ul className={styles.orderList}>
                                    {bookingRooms.map(br => (
                                        <li key={br.id} className={styles.orderItem}>
                                            <div className={styles.orderItemDetails}>
                                                <NavLink to={`/rooms/${br.room.id}`}>{br.room.name}</NavLink>
                                                <p>{format(br.checkInDate, "MMMM d")} -
                                                    {format(br.checkOutDate, "MMMM d")}
                                                    <span className={styles.orderItemDays}>({calculateNumNights(br.checkInDate, br.checkOutDate)} day{calculateNumNights(br.checkInDate, br.checkOutDate) > 1 ? "s" : ""})</span>
                                                </p>
                                                <p>{`${br.numGuests} Guest${br.numGuests > 1 ? "s" : ""}`}</p>
                                                <p>
                                                    {br.extraServices.map((service, index) => (
                                                        <span key={service.id}
                                                              className={styles.roomServices}>{service.name}{index < br.extraServices.length - 1 ? ", " : "."}</span>
                                                    ))}
                                                </p>
                                            </div>
                                            <div className={styles.orderItemPrice}>{currencyFormatter.format(calculateRoomPriceEstimate(br))}</div>
                                        </li>
                                    ))}
                                </ul>
                                <div className={styles.totalsContainer}>
                                    <p>Subtotal</p>
                                    <p>{currencyFormatter.format(calculateTotalPriceEstimate(bookingRooms))}</p>
                                </div>
                                <div className={styles.totalsContainer}>
                                    <p>Total</p>
                                    <p className={styles.bold}>{currencyFormatter.format(calculateTotalPriceEstimate(bookingRooms))}</p>
                                </div>
                                <small className={styles.validationError}>{validationError}</small>
                                <button className={styles.orderBtn} disabled={submitLoading} data-loading={submitLoading}><p>Place Order</p>{submitLoading && <Spinner position="absolute" size={7} color="#fff" />}</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default CheckoutPage;
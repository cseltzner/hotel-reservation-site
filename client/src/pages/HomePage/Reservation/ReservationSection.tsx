import styles from "./ReservationSection.module.scss";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Select from '@radix-ui/react-select';
import { add, format, compareAsc } from "date-fns";
import ChevronDown from "../../../components/Icons/ChevronDown.tsx";
import { useNavigate } from "react-router-dom";
import FormSelect from "../../../components/FormSelect/FormSelect.tsx";

const currentDate = new Date();

const tomorrowDate = new Date();
tomorrowDate.setDate(tomorrowDate.getDate() + 1);

const ReservationSection = () => {
    const [checkinDate, setCheckinDate] = useState<Date>(add(currentDate, {days: 1}))
    const [checkinDateTouched, setCheckinDateTouched] = useState(false);

    const [checkoutDate, setCheckOutDate] = useState<Date>(add(tomorrowDate, {days: 1}))
    const [checkoutDateTouched, setCheckOutDateTouched] = useState(false);

    const [numGuests, setNumGuests] = useState(1);
    const [numGuestsTouched, setNumGuestsTouched] = useState(false);

    const navigate = useNavigate();

    const onSetCheckinDate = (date: Date | undefined) => {
        if (date === undefined) {
            setCheckinDate(currentDate);
        } else if (compareAsc(date, checkinDate) === 1) {
            setCheckOutDate(add(date, {days: 1}))
            setCheckinDate(date);
        } else {
            setCheckinDate(date);
        }
        setCheckinDateTouched(true);
    }

    const onSetCheckoutDate = (date: Date | undefined) => {
        if (date === undefined) {
            setCheckOutDate(currentDate);
        } else {
            setCheckOutDate(date);
        }
        setCheckOutDateTouched(true);
    }

    const onSetNumGuests = (value: string) => {
        const numGuestsValue = parseInt(value);
        setNumGuests(numGuestsValue);
        setNumGuestsTouched(true);
    }

    return (
        <section className={styles.reservationContainer}>
            <div className="container">
                <div className={styles.reservationHeading}>
                    <h2>Reservation</h2>
                    <p>We guarantee that your visit will be a pleasant and relaxing experience throughout your whole stay.</p>
                </div>
                <div className={styles.reservationForm}>
                    <div className={styles.formItem}>
                        <label htmlFor="checkin">Check-In</label>
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger className={`${styles.dropdownTrigger} ${checkinDateTouched && styles.dropdownTriggerTouched}`}>
                                    {format(checkinDate || currentDate, "MMM dd yyyy")}
                                    <span className={styles.chevron}><ChevronDown /></span>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content className={styles.dropdownContent}>
                                <DayPicker
                                    className={styles.dayPicker}
                                    mode="single"
                                    defaultMonth={checkinDate}
                                    required
                                    disabled={{before: add(currentDate, {days: 1})}}
                                    selected={checkinDate}
                                    onSelect={onSetCheckinDate} />
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    </div>
                    <div className={styles.formItem}>
                        <label htmlFor="checkout">Check-Out</label>
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger className={`${styles.dropdownTrigger} ${checkoutDateTouched && styles.dropdownTriggerTouched}`}>
                                    {format(checkoutDate || tomorrowDate, "MMM dd yyyy")}
                                    <span className={styles.chevron}><ChevronDown /></span>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content className={styles.dropdownContent}>
                                <DayPicker
                                    className={styles.dayPicker}
                                    mode="single"
                                    defaultMonth={checkoutDate}
                                    required
                                    disabled={{before: add(checkinDate, {days: 1})}}
                                    selected={checkoutDate}
                                    onSelect={onSetCheckoutDate} />
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    </div>
                    <FormSelect
                        onValueChange={onSetNumGuests}
                        isTouched={numGuestsTouched}
                        selectTriggerValue={`${numGuests} Guest${numGuests > 1 ? "s" : ""}`}
                        label="Guests"
                        selectItems={[
                            {value: "1", displayValue: "1"},
                            {value: "2", displayValue: "2"},
                            {value: "3", displayValue: "3"},
                            {value: "4", displayValue: "4"},
                            {value: "5", displayValue: "5"},
                            {value: "6", displayValue: "6"},
                        ]
                        }
                    />
                    <button
                        className={styles.submitBtn}
                        onClick={() => navigate(`/rooms?guests=${numGuests}`, {state: {checkinDate, checkoutDate}})}
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ReservationSection;
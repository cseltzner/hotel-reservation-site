import styles from "./ReservationSection.module.scss";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Select from '@radix-ui/react-select';
import { add, format, compareAsc } from "date-fns";
import ChevronDown from "../../../components/Icons/ChevronDown.tsx";
import { useNavigate } from "react-router-dom";

const currentDate = new Date();

const tomorrowDate = new Date();
tomorrowDate.setDate(tomorrowDate.getDate() + 1);

const ReservationSection = () => {
    const [checkinDate, setCheckinDate] = useState<Date>(currentDate)
    const [checkinDateTouched, setCheckinDateTouched] = useState(false);

    const [checkoutDate, setCheckOutDate] = useState<Date>(tomorrowDate)
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
                                    disabled={{before: currentDate}}
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
                    <div className={styles.formItem}>
                        <label htmlFor="guests">Guests</label>
                        <Select.Root defaultValue={"1"} onValueChange={onSetNumGuests}>
                            <Select.Trigger className={`${styles.dropdownTrigger} ${numGuestsTouched && styles.dropdownTriggerTouched}`}>
                                <Select.Value>{numGuests} Guest{numGuests > 1 && "s"}</Select.Value>
                                <span className={styles.chevron}><ChevronDown /></span>
                            </Select.Trigger>
                            <Select.Content className={styles.selectContent} position="popper">
                                <Select.Viewport>
                                    <Select.Item value={"1"} className={styles.selectItem}>1</Select.Item>
                                    <Select.Item value={"2"} className={styles.selectItem}>2</Select.Item>
                                    <Select.Item value={"3"} className={styles.selectItem}>3</Select.Item>
                                    <Select.Item value={"4"} className={styles.selectItem}>4</Select.Item>
                                    <Select.Item value={"5"} className={styles.selectItem}>5</Select.Item>
                                    <Select.Item value={"6"} className={styles.selectItem}>6</Select.Item>
                                </Select.Viewport>
                            </Select.Content>
                        </Select.Root>
                    </div>
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
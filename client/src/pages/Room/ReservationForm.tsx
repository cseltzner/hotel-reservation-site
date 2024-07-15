import styles from "./ReservationForm.module.scss";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { add, compareAsc, format, intervalToDuration } from "date-fns";
import ChevronDown from "../../components/Icons/ChevronDown.tsx";
import { DayPicker } from "react-day-picker";
import { useEffect, useState } from "react";
import FormSelect, { SelectItem } from "../../components/FormSelect/FormSelect.tsx";
import { Service } from "../../interfaces/models/Service.ts";
import { apiUrls } from "../../http/urls.ts";
import { Room } from "../../interfaces/models/Room.ts";
import { calculateNumNights } from "../../helpers/bookingHelpers.ts";

interface Props {
    room: Room;
    onBook: (checkinDate: Date, checkoutDate: Date, numGuests: number, services: Service[]) => void;
}

const currentDate = new Date();
currentDate.setHours(0);
currentDate.setMinutes(0);
currentDate.setSeconds(0);
currentDate.setMilliseconds(0);

const tomorrowDate = new Date();
tomorrowDate.setDate(tomorrowDate.getDate() + 1);
tomorrowDate.setHours(0);
tomorrowDate.setMinutes(0);
tomorrowDate.setSeconds(0);
currentDate.setMilliseconds(0);

const ReservationForm = ({room, onBook}: Props) => {
    const [services, setServices] = useState<Service[]>([]);
    const [servicesSelected, setServicesSelected] = useState<Service[]>([]);

    const [checkinDate, setCheckinDate] = useState<Date>(add(currentDate, {days: 1}))
    const [checkinDateTouched, setCheckinDateTouched] = useState(false);

    const [checkoutDate, setCheckOutDate] = useState<Date>(add(tomorrowDate, {days: 1}))
    const [checkoutDateTouched, setCheckOutDateTouched] = useState(false);

    const [numGuests, setNumGuests] = useState(1);
    const [numGuestsTouched, setNumGuestsTouched] = useState(false);

    const formSelectItems: SelectItem[] = [];
    for (let i = 0; i < room.maxGuests; i++) {
        formSelectItems.push({
            value: (i + 1).toString(),
            displayValue: (i + 1).toString()
        })
    }

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

    const onServiceSelected = (serviceSelected: Service, checked: boolean) => {
        if (checked) {
            setServicesSelected(prevState => {
                return [
                    ...prevState,
                    serviceSelected
                ]
            })
        } else {
            setServicesSelected(prevState => {
                return prevState.filter(s => s.id !== serviceSelected.id)
            })
        }
    }

    useEffect(() => {
        const fetchServices = async () => {
            const response = await fetch(apiUrls.getServices());
            const servicesResponse = await response.json();
            setServices(servicesResponse);
        }

        fetchServices();
    }, []);

    const calculatePriceEstimate = () => {
        let extraServicesCost = 0;
        servicesSelected.forEach(service => extraServicesCost += service.cost);
        return (room.basePrice + (room.additionalGuestPrice * (numGuests - 1)) + extraServicesCost) * calculateNumNights(checkinDate, checkoutDate)
    }

    const numNights = calculateNumNights(checkinDate, checkoutDate);

    return (
        <div className={styles.reservationForm}>
            <h2>Reserve your Suite</h2>
            <div className={styles.formDropdowns}>
                <div className={styles.formItem}>
                    <label htmlFor="checkin">Check-In</label>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger
                            className={`${styles.dropdownTrigger} ${checkinDateTouched && styles.dropdownTriggerTouched}`}>
                            {format(checkinDate || currentDate, "MMM dd yyyy")}
                            <span className={styles.chevron}><ChevronDown/></span>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content className={styles.dropdownContent}>
                            <DayPicker
                                className={styles.dayPicker}
                                mode="single"
                                defaultMonth={checkinDate}
                                required
                                disabled={{before: add(currentDate, {days: 1})}}
                                selected={checkinDate}
                                onSelect={onSetCheckinDate}/>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </div>
                <div className={styles.formItem}>
                    <label htmlFor="checkout">Check-Out</label>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger
                            className={`${styles.dropdownTrigger} ${checkoutDateTouched && styles.dropdownTriggerTouched}`}>
                            {format(checkoutDate || tomorrowDate, "MMM dd yyyy")}
                            <span className={styles.chevron}><ChevronDown/></span>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content className={styles.dropdownContent}>
                            <DayPicker
                                className={styles.dayPicker}
                                mode="single"
                                defaultMonth={checkoutDate}
                                required
                                disabled={
                                    {
                                        before: add(checkinDate, {days: 1}),
                                        after: add(checkinDate, {days: 14})
                                    }
                                }
                                selected={checkoutDate}
                                onSelect={onSetCheckoutDate}/>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </div>
                <FormSelect
                    onValueChange={onSetNumGuests}
                    isTouched={numGuestsTouched}
                    selectTriggerValue={`${numGuests} Guest${numGuests > 1 ? "s" : ""}`}
                    label="Guests"
                    selectItems={formSelectItems}
                />
            </div>
            <div className={styles.servicesContainer}>
                <h3>Extra Services</h3>
                <p className={styles.servicesDescription}>(Charged per night)</p>
                <ul className={styles.checkboxList}>
                    {services && services.map(service => (
                        <li key={service.id} className={styles.checkboxContainer}>
                            <div className={styles.checkboxInputContainer}>
                                <input
                                    type="checkbox"
                                    name={service.name}
                                    id={service.name}
                                    checked={servicesSelected.findIndex(s => s.id === service.id) >= 0}
                                    onChange={(e) => onServiceSelected(service, e.target.checked)}
                                />
                                <label htmlFor={service.name}>{service.name}</label>
                            </div>
                            <p>${service.cost}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.priceContainer}>
                <p className={styles.priceDescription}>Your Price</p>
                <p className={styles.priceValue}>${calculatePriceEstimate()}</p>
            </div>
            <p className={styles.nights}>({numNights} Night{numNights > 1 ? "s" : ""})</p>
            <button className={styles.bookButton} onClick={() => onBook(checkinDate, checkoutDate, numGuests, servicesSelected)}>Book Now</button>
        </div>
    );
};

export default ReservationForm;

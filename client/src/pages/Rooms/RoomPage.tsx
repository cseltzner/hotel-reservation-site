import styles from "./RoomPage.module.scss";
import { useEffect, useState } from "react";
import { Room } from "../../interfaces/models/Room";
import { apiUrls, GetRoomsQueries, SortQuery } from "../../http/urls.ts";
import { PagedList } from "../../interfaces/PagedList.ts";
import RoomComponent from "./Room/RoomComponent.tsx";
import FormSelect, { SelectItem } from "../../components/FormSelect/FormSelect.tsx";
import * as Slider from '@radix-ui/react-slider';

const sortBySelectItems: SelectItem[] = [
    {value: "featured", displayValue: "Featured"},
    {value: "roomNameDesc", displayValue: "Name - A-Z"},
    {value: "roomNameAsc", displayValue: "Name - Z-A"},
    {value: "priceDesc", displayValue: "Price - High to low"},
    {value: "priceAsc", displayValue: "Price - Low to high"},
    {value: "maxGuests", displayValue: "Guests"},
    {value: "beds", displayValue: "Number of beds"},
]

const RoomPage = () => {
    const [rooms, setRooms] = useState<Room[]>([]);
    const [currentRoomQuery, setCurrentRoomQuery] = useState<GetRoomsQueries>({})

    // Sort form state
    const [sortBy, setSortBy] = useState<SelectItem>(sortBySelectItems[0]);
    const [sortByTouched, setSortByTouched] = useState(false);
    
    // Filter form state
    const [filter, setFilter] = useState<string>("");
    const [maxPrice, setMaxPrice] = useState(850);
    const [minPrice, setMinPrice] = useState(150);

    const onSetSortBy = (sort: string) => {
        setSortByTouched(true);
        setSortBy(sortBySelectItems.find(item => item.value === sort) || sortBySelectItems[0]);
        const newSortQuery: {sortBy?: SortQuery | undefined, isDescending?: boolean} = {
            sortBy: undefined,
            isDescending: undefined
        }
        if (sort === "roomNameDesc") {
            newSortQuery.sortBy = "RoomName";
            newSortQuery.isDescending = false;
        }
        if (sort === "roomNameAsc") {
            newSortQuery.sortBy = "RoomName";
            newSortQuery.isDescending = true;
        }
        if (sort === "priceDesc") {
            newSortQuery.sortBy = "Price";
            newSortQuery.isDescending = true;
        }
        if (sort === "priceAsc") {
            newSortQuery.sortBy = "Price";
            newSortQuery.isDescending = false;
        }
        if (sort === "maxGuests") {
            newSortQuery.sortBy = "MaxGuests";
            newSortQuery.isDescending = true;
        }
        if (sort === "beds") {
            newSortQuery.sortBy = "Beds";
            newSortQuery.isDescending = true;
        }

        setCurrentRoomQuery(prevState => {
            return {
                ...prevState,
                sortBy: newSortQuery.sortBy,
                isDescending: newSortQuery.isDescending
            }
        })
    }


    const onFilterChange = (newFilter: string) => {
        // Ignore unchanged values
        if (newFilter === filter) return;
        setFilter(newFilter);
        setCurrentRoomQuery(prevState => {
            return {
                ...prevState,
                roomName: newFilter.trim()
            }
        })
    }

    const onSetPrice = (prices: number[]) => {
        setMinPrice(prices[0]);
        setMaxPrice(prices[1]);
    }

    const onPriceCommitted = (prices: number[]) => {
        setCurrentRoomQuery(prevState => {
            return {
                ...prevState,
                minPrice: prices[0].toString(),
                maxPrice: prices[1].toString()
            }
        })
    }

    useEffect(() => {
        const fetchRooms = async () => {
            const response = await fetch(apiUrls.getRooms(currentRoomQuery));
            const json: PagedList<Room> = await response.json();
            const roomsResponse = json.data
            setRooms(roomsResponse);
        }

        fetchRooms();
    }, [currentRoomQuery])

    return (
        <main className={styles.roomPage}>
            <div className="container">
                <h1>Rooms</h1>
                <div className={styles.roomPageGrid}>
                    <div className={styles.roomList}>
                        {rooms.map(room => (
                            <RoomComponent key={room.id} room={room}/>
                        ))}
                        {rooms.length === 0 && (
                            <div className={styles.emptyRoomList}>
                                <h2>No Rooms Found.</h2>
                                <p>No rooms were found with the given search term. Please check your search query and try again.</p>
                            </div>
                        )}
                    </div>
                    <div className={styles.filterList}>
                        <h2>Find Your Room</h2>
                        <div className={styles.filterForm}>
                            <div className={styles.filterFormTextInputGroup}>
                                <label className={styles.formLabel} htmlFor="filter">Search</label>
                                <input type="text" placeholder="Search Suites..."
                                       onBlur={(e) => onFilterChange(e.target.value)}
                                       onKeyDown={(e) => e.key === "Enter" && onFilterChange((e as any).target.value)}
                                />
                            </div>
                            <FormSelect
                                onValueChange={onSetSortBy}
                                isTouched={sortByTouched}
                                selectTriggerValue={sortBy.displayValue}
                                label="Sort"
                                selectItems={sortBySelectItems}
                                />
                            <div className={styles.sliderInputGroup}>
                                <label className={styles.formLabel}>Price</label>
                                <div className={styles.sliderContainer}>
                                    <div className={styles.sliderValue}>${minPrice}</div>
                                    <Slider.Root
                                        className={styles.sliderRoot}
                                        defaultValue={[minPrice, maxPrice]}
                                        min={100}
                                        max={900}
                                        step={50}
                                        minStepsBetweenThumbs={1}
                                        onValueChange={onSetPrice}
                                        onValueCommit={onPriceCommitted}
                                    >
                                        <Slider.Track className={styles.sliderTrack}>
                                            <Slider.Range className={styles.sliderRange} />
                                        </Slider.Track>
                                        <Slider.Thumb className={styles.sliderThumb} defaultValue={0} />
                                        <Slider.Thumb className={styles.sliderThumb} defaultValue={1000} />
                                    </Slider.Root>
                                    <div className={styles.sliderValue}>${maxPrice}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default RoomPage;
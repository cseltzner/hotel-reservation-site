import styles from "./RoomPage.module.scss";
import { useEffect, useState } from "react";
import { Room } from "../../interfaces/models/Room";
import { apiUrls, GetRoomsQueries, SortQuery } from "../../http/urls.ts";
import { PagedList } from "../../interfaces/PagedList.ts";
import RoomComponent from "./Room/RoomComponent.tsx";
import FormSelect, { SelectItem } from "../../components/FormSelect/FormSelect.tsx";

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

    // Filter form state
    const [sortBy, setSortBy] = useState<SelectItem>(sortBySelectItems[0]);
    const [sortByTouched, setSortByTouched] = useState(false);

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
                    </div>
                    <div className={styles.filterList}>
                        <h2>Find Your Room</h2>
                        <div className={styles.filterForm}>
                            <FormSelect
                                onValueChange={onSetSortBy}
                                isTouched={sortByTouched}
                                selectTriggerValue={sortBy.displayValue}
                                selectItems={sortBySelectItems}
                                />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default RoomPage;
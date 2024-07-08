import styles from "./RoomPage.module.scss";
import { useEffect, useState } from "react";
import { Room } from "../../interfaces/models/Room";
import { apiUrls } from "../../http/urls.ts";
import { PagedList } from "../../interfaces/PagedList.ts";
import RoomComponent from "./Room/RoomComponent.tsx";

const RoomPage = () => {
    const [rooms, setRooms] = useState<Room[]>([]);

    useEffect(() => {
        const fetchRooms = async () => {
            const response = await fetch(apiUrls.getRooms({}));
            const json: PagedList<Room> = await response.json();
            const roomsResponse = json.data
            setRooms(roomsResponse);
        }

        fetchRooms();
    }, [])

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
                        Filters
                    </div>
                </div>
            </div>
        </main>
    );
};

export default RoomPage;
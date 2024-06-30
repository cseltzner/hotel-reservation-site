import { Outlet } from "react-router-dom";
import Header from "./layout/Header/Header.tsx";
import NavMenu from "./layout/NavigationMenu/NavMenu.tsx";
import { useEffect, useState } from "react";
import { RoomName } from "./interfaces/RoomName.ts";
import { apiUrls } from "./http/urls.ts";

const NUM_ROOM_NAMES_TO_FETCH = 5; // Used to fetch a certain number of room names from API for "Rooms" tab dropdown

const App = () => {
    const [roomNames, setRoomNames] = useState<RoomName[]>([]);

    useEffect(() => {
        const fetchRoomNames = async () => {
            const response = await fetch(apiUrls.getRoomNames(NUM_ROOM_NAMES_TO_FETCH))
            setRoomNames(await response.json());
        }

        fetchRoomNames().then();
    }, []);

    return (
        <div>
            <Header />
            <NavMenu roomNames={roomNames} />
            <Outlet />
        </div>
    );
};

export default App;
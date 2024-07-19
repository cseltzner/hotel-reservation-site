import styles from "./App.module.scss";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Header from "./layout/Header/Header.tsx";
import NavMenu from "./layout/NavigationMenu/NavMenu.tsx";
import { useEffect, useLayoutEffect, useState } from "react";
import { RoomName } from "./interfaces/RoomName.ts";
import { apiUrls } from "./http/urls.ts";
import Footer from "./layout/Footer/Footer.tsx";
import Github from "./components/Icons/Github.tsx";
import { ReservationContext } from "./context/reservationContext.ts";
import { useReservationContextDefaults } from "./context/useReservationContext.ts";

const NUM_ROOM_NAMES_TO_FETCH = 5; // Used to fetch a certain number of room names from API for "Rooms" tab dropdown

const App = () => {
    const [roomNames, setRoomNames] = useState<RoomName[]>([]);
    const location = useLocation();

    useEffect(() => {
        const fetchRoomNames = async () => {
            const response = await fetch(apiUrls.getRoomNames(NUM_ROOM_NAMES_TO_FETCH))
            setRoomNames(await response.json());
        }

        fetchRoomNames().then();
    }, []);

    // Scroll to top of page on page change
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <ReservationContext.Provider value={useReservationContextDefaults()}>
            <div className={styles.appWrapper}>
                <Header/>
                <NavMenu roomNames={roomNames}/>
                <Outlet/>
                <Footer roomNames={roomNames}/>
                <NavLink to="https://www.github.com/cseltzner" target="_blank">
                    <Github className={styles.github}/>
                </NavLink>
            </div>
        </ReservationContext.Provider>
    );
};

export default App;
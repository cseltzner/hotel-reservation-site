import styles from "./RoomComponent.module.scss";
import { Room } from "../../../interfaces/models/Room.ts";
import Bed from "../../../components/Icons/Bed.tsx";
import Person from "../../../components/Icons/Person.tsx";
import { NavLink, useNavigate } from "react-router-dom";

interface Props {
    room: Room;
}

const RoomComponent = ({room}: Props) => {
    const navigate = useNavigate();

    return (
        <article className={styles.room}>
            <NavLink to={`/rooms/${room.id}`} className={styles.roomImg}>
                <img src={room.primaryImageUrl} alt={room.name}/>
            </NavLink>
            <div className={styles.roomBody}>
                <div className={styles.roomHeader}>
                    <h3><NavLink to={`/rooms/${room.id}`}>{room.name}</NavLink></h3>
                    <p className={styles.roomPrice}>From <span className={styles.basePrice}>${room.basePrice}</span></p>
                </div>
                <div className={styles.roomDetails}>
                    <div className={styles.roomDetail}>
                        <Bed className={styles.detailIcon}/>
                        {room.numBeds} Bed{room.numBeds > 1 && "s"}
                    </div>
                    <div className={styles.roomDetailDivider}></div>
                    <div className={styles.roomDetail}>
                        <Person className={styles.detailIcon}/>
                        {room.maxGuests === 1
                            ? "1 Guest"
                            : `1-${room.maxGuests} Guests`
                        }
                    </div>
                </div>
                <p className={styles.roomDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
                    deserunt dicta, dolorum et illo nihil provident sed sequi sint voluptates.</p>
                <button className={styles.button} onClick={() => navigate(`/rooms/${room.id}`)}>Book Now</button>
            </div>
        </article>
    );
};

export default RoomComponent;
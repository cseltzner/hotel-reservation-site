import styles from "./RoomPage.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Room } from "../../interfaces/models/Room.ts";
import { apiUrls } from "../../http/urls.ts";
import KingBed from "../../components/Icons/KingBed.tsx";
import Person from "../../components/Icons/Person.tsx";
import Coffee from "../../components/Icons/Coffee.tsx";

const RoomPage = () => {
    const navigate = useNavigate();
    const roomId = useParams().id;
    const [room, setRoom] = useState<Room | undefined>();

    useEffect(() => {
        const fetchRoom = async () => {
            const response = await fetch(apiUrls.getRoom(roomId!))
            // Check for 404
            if (response.status === 404) {
                navigate("not-found")
            }
            const responseRoom: Room = await response.json();
            setRoom(responseRoom);
        };

        fetchRoom();
    }, [roomId])

    return (
        <>
            {room && (
                <main className={styles.roomPage}>
                    <div className={styles.roomImgBanner}>
                        <img src={room.primaryImageUrl} alt={room.name} />
                        <div className={styles.imgBannerDetails}>
                            <p className={styles.price}><p>From</p><p className={styles.priceValue}>${room.basePrice}</p></p>
                            <button className={styles.button}>View More</button>
                            <ul className={styles.bannerFeatureList}>
                                <li className={styles.bannerFeature}>
                                    <KingBed className={styles.bannerIcon} />
                                    <p>{room.numBeds} King Bed{room.numBeds > 1 ? "s" : ""}</p>
                                </li>
                                <li className={styles.bannerFeature}>
                                    <Person className={styles.bannerIcon} />
                                    <p>1-{room.maxGuests} Guests</p>
                                </li>
                                <li className={styles.bannerFeature}>
                                    <Coffee className={styles.bannerIcon} />
                                    <p>Complementary breakfast</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </main>
            )}
        </>
    );
};

export default RoomPage;
import styles from "./RoomPage.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Room } from "../../interfaces/models/Room.ts";
import { apiUrls } from "../../http/urls.ts";
import KingBed from "../../components/Icons/KingBed.tsx";
import Person from "../../components/Icons/Person.tsx";
import Coffee from "../../components/Icons/Coffee.tsx";
import { getFeatureIcon } from "../../components/Icons/IconHelpers.tsx";
import { PagedList } from "../../interfaces/PagedList.ts";
import ReservationForm from "./ReservationForm.tsx";

const RoomPage = () => {
    const navigate = useNavigate();
    const roomId = useParams().id;
    const [room, setRoom] = useState<Room | undefined>();
    const [relatedRooms, setRelatedRooms] = useState<Room[]>([]);

    // Fetch current room
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

    // Fetch related rooms
    useEffect(() => {
        const fetchRelatedRooms = async () => {
            const response = await fetch(apiUrls.getRooms({
                sortBy: "Beds",
                isDescending: true,
                pageNumber: 1,
                pageSize: 3
            }))
            const paginatedRooms: PagedList<Room> = await response.json();
            const rooms = paginatedRooms.data;
            setRelatedRooms(rooms);
        }

        fetchRelatedRooms();
    }, [roomId]);

    return (
        <>
            {room && (
                <div className={styles.roomPage}>
                    <div className={styles.roomImgBanner}>
                        <img src={room.primaryImageUrl} alt={room.name}/>
                        <div className={styles.imgBannerDetails}>
                            <p className={styles.price}><span>From</span><span
                                className={styles.priceValue}>${room.basePrice}</span></p>
                            <a href="#main" className={styles.button}>View More</a>
                            <ul className={styles.bannerFeatureList}>
                                <li className={styles.bannerFeature}>
                                    <KingBed className={styles.bannerIcon}/>
                                    <p>{room.numBeds} King Bed{room.numBeds > 1 ? "s" : ""}</p>
                                </li>
                                <li className={styles.bannerFeature}>
                                    <Person className={styles.bannerIcon}/>
                                    <p>1-{room.maxGuests} Guests</p>
                                </li>
                                <li className={styles.bannerFeature}>
                                    <Coffee className={styles.bannerIcon}/>
                                    <p>Complementary breakfast</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="container">
                        <main className={styles.roomMain} id="main">
                            <div className={styles.roomMainDescription}>
                                <h1>{room.name}</h1>
                                <p className={styles.roomDescription}>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Adipisci aspernatur aut, culpa doloremque dolores ducimus earum ex
                                    exercitationem facere illo impedit iure molestias mollitia nihil obcaecati placeat
                                    quae qui quidem quod quos ratione reiciendis sit tempora totam ullam. Atque,
                                    error.</p>
                                <p className={styles.roomDescription}>Aperiam aspernatur autem cum cumque dolore ea esse
                                    ex maiores nobis possimus quae repellat repellendus sunt tempora, vero! Amet aperiam
                                    architecto commodi consectetur cumque cupiditate dolor eligendi ex fuga id illum
                                    inventore iure, iusto magnam magni nihil nisi officia pariatur, possimus saepe sequi
                                    soluta suscipit ullam vel veniam vitae voluptate? Accusantium dicta dignissimos
                                    eligendi qui ullam voluptatem.</p>
                                <div className={styles.gallery}>
                                    <a className={styles.galleryImg} href={room.secondaryImageUrls[0]}
                                       target="_blank"><img src={room.secondaryImageUrls[0]} alt={room.name}/></a>
                                    <a className={styles.galleryImg} href={room.secondaryImageUrls[1]}
                                       target="_blank"><img src={room.secondaryImageUrls[1]} alt={room.name}/></a>
                                    <a className={styles.galleryImg} href={room.secondaryImageUrls[2]}
                                       target="_blank"><img src={room.secondaryImageUrls[2]} alt={room.name}/></a>
                                </div>
                                <div className={styles.featuresContainer}>
                                    <h3>Room Features</h3>
                                    <p>Consectetur adipisicing elit. Exercitationem rem tenetur ut.</p>
                                    <ul className={styles.featureList}>
                                        {room.features.map(feature => (
                                            <li key={feature.id} className={styles.feature}>
                                                {getFeatureIcon(feature.id, styles.featureIcon)}
                                                <p className={styles.featureName}>{feature.featureName}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.roomReservation}>
                                <ReservationForm room={room} />
                            </div>
                        </main>
                        <div className={styles.relatedContainer}>
                            <h3>Related Suites</h3>
                            <ul className={styles.relatedList}>
                                {relatedRooms.map(room => (
                                    <li key={room.id} className={styles.relatedRoom}>
                                        <a href={`/rooms/${room.id}`} target="_blank">
                                            <div className={styles.relatedImgContainer}>
                                                <img src={room.primaryImageUrl} alt={room.name} loading="lazy"/>
                                                <div className={styles.relatedImgDetails}>From <span
                                                    className={styles.relatedImgPrice}>${room.basePrice}</span></div>
                                            </div>
                                            <ul className={styles.relatedFeatures}>
                                                <li className={styles.relatedFeature}>
                                                    <Person className={styles.relatedIcon}/>
                                                    <p>1-{room.maxGuests} Guests</p>
                                                </li>
                                                <div className={styles.relatedFeatureDivider}></div>
                                                <li className={styles.relatedFeature}>
                                                    <KingBed className={styles.relatedIcon}/>
                                                    <p>{room.numBeds} Bed{room.numBeds > 1 ? "s" : ""}</p>
                                                </li>
                                            </ul>
                                            <h4 className={styles.relatedRoomName}>{room.name}</h4>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default RoomPage;
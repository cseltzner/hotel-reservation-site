import styles from "./EventsPage.module.scss";
import NewsletterSection from "../HomePage/Newsletter/NewsletterSection.tsx";
import { useEffect } from "react";

const EventsPage = () => {
    useEffect(() => {
        document.title = "Events | Alpine Luxury Suites"
    }, []);

    return (
        <main className={styles.eventsPage}>
            <div className="container">
                <h1 className={styles.eventsHeader}>Find your desire</h1>
                <p className={styles.eventsHeaderDescription}>All events are included with your stay.</p>
                <ul className={styles.eventList}>
                    <li className={styles.eventCard}>
                        <div className={styles.imgContainer}>
                            <img
                                src="https://res.cloudinary.com/dnxdsagpg/image/upload/v1719769513/hotel-site/events/culinary.jpg"
                                alt="Well presented meat dish"/>
                        </div>
                        <h2>Culinary Weekend</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque distinctio enim eveniet fuga
                            inventore sint tenetur. Alias atque doloremque dolores eius fuga maiores quod, ratione
                            rerum! Amet aspernatur doloremque, enim illum repellat velit veritatis! Ab aperiam commodi
                            illo inventore unde.</p>
                    </li>
                    <li className={styles.eventCard}>
                        <div className={styles.imgContainer}>
                            <img
                                src="https://res.cloudinary.com/dnxdsagpg/image/upload/v1720057218/hotel-site/events/yacht.jpg"
                                alt="Yacht sailing on the ocean"/>
                        </div>
                        <h2>Yacht Tours</h2>
                        <p>Mauris nisi ex, ultrices a fringilla eget, venenatis eu enim. Sed interdum sagittis elit id
                            cursus. Integer semper volutpat tellus in efficitur. Proin ac nunc et velit ullamcorper
                            luctus in et eros. Nullam non purus quis nibh eleifend hendrerit. Praesent.</p>
                    </li>
                    <li className={styles.eventCard}>
                        <div className={styles.imgContainer}>
                            <img
                                src="https://res.cloudinary.com/dnxdsagpg/image/upload/v1719769513/hotel-site/events/wine.jpg"
                                alt="Many stored bottles of wine"/>
                        </div>
                        <h2>Wine Tasting</h2>
                        <p>Cras eu nulla nec leo bibendum sollicitudin commodo id metus. Ut non consectetur nunc, mattis
                            dignissim ligula. Ut pulvinar sed dui vitae porta. Ut in magna accumsan, consectetur urna
                            vel, placerat libero. Mauris urna ante, tempor vel ipsum finibus, convallis.</p>
                    </li>
                    <li className={styles.eventCard}>
                        <div className={styles.imgContainer}>
                            <img
                                src="https://res.cloudinary.com/dnxdsagpg/image/upload/v1719769513/hotel-site/events/exercise-room.jpg"
                                alt="Exercise room with many weights"/>
                        </div>
                        <h2>Exercise Rooms</h2>
                        <p>Pellentesque sapien nisl, pellentesque eget luctus eget, accumsan et risus. Maecenas commodo,
                            velit vel ornare dignissim, mi turpis molestie dolor, sed iaculis ex lectus in mi. Aenean
                            mollis lacinia augue, tristique viverra lectus. Integer sit amet consequat nunc. Nulla
                            mi.</p>
                    </li>
                    <li className={styles.eventCard}>
                        <div className={styles.imgContainer}>
                            <img
                                src="https://res.cloudinary.com/dnxdsagpg/image/upload/v1719769513/hotel-site/events/art.jpg"
                                alt="Art exhibit with many paintings on the wall"/>
                        </div>
                        <h2>Art Exhibit</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores explicabo neque
                            quos velit. Ad aperiam aspernatur aut commodi consequuntur delectus, deleniti dolorum
                            eligendi enim harum, id ipsam, minus nam possimus quod repudiandae saepe totam vel
                            veritatis voluptate? At incidunt, magnam officiis omnis ratione voluptatem.</p>
                    </li>
                    <li className={styles.eventCard}>
                        <div className={styles.imgContainer}>
                            <img
                                src="https://res.cloudinary.com/dnxdsagpg/image/upload/v1719769513/hotel-site/events/pool.jpg"
                                alt="Swimming pool with palm tree in front of it"/>
                        </div>
                        <h2>Swimming Pools</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem corporis eius
                            explicabo fugit mollitia non odit quas reprehenderit sequi? Dolor doloremque eum
                            molestias obcaecati qui quis reiciendis vel?</p>
                    </li>
                    <li className={styles.eventCard}>
                        <div className={styles.imgContainer}>
                            <img
                                src="https://res.cloudinary.com/dnxdsagpg/image/upload/v1719769513/hotel-site/events/tea.jpg"
                                alt="Cup of tea surrounded by tea leaves"/>
                        </div>
                        <h2>Tea Gathering</h2>
                        <p>Donec vitae justo quis ipsum molestie ornare. Quisque lobortis magna ultricies dui mollis
                            pellentesque in ut risus. Aliquam erat volutpat. Donec volutpat nulla auctor nulla auctor
                            aliquam. Suspendisse id aliquam risus. Vestibulum ante ipsum primis in faucibus orci luctus
                            et.</p>
                    </li>
                    <li className={styles.eventCard}>
                        <div className={styles.imgContainer}>
                            <img
                                src="https://res.cloudinary.com/dnxdsagpg/image/upload/v1719769513/hotel-site/events/hot-tub.jpg"
                                alt="Hot tub sitting in a room with wooden walls"/>
                        </div>
                        <h2>Hot Tub</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, minima, officia!
                            Aliquid architecto consectetur consequuntur, cum deserunt dolor ducimus eaque earum
                            facilis illo in incidunt, molestiae nesciunt nisi non placeat quis quisquam, repellat
                            reprehenderit similique sint sunt velit.</p>
                    </li>
                </ul>
            </div>
            <div className={styles.newsletter}>
                <NewsletterSection title="Stay up to date on our latest events" />
            </div>
        </main>
    );
};

export default EventsPage;
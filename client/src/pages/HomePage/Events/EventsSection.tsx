import styles from "./EventsSection.module.scss";
import { NavLink } from "react-router-dom";

/**
 *  Events:
 *  Culinary weekend Fri-Sat - Special menus in
 *  Art Exhibit Wednesdays - A guided tour of our local artists' finest work
 *  Wine tasting Thursdays
 *  Tea gathering Monday
 */

const EventsSection = () => {
    return (
        <section className={styles.eventSection}>
            <div className="container">
                <div className={styles.eventGrid}>
                    <div className={styles.gridCol}>
                        <div className={styles.eventSectionHeader}>
                            <h3>Our Events</h3>
                            <p>No matter when you visit, we offer events made possible by our renowned local artists and
                                chefs.</p>
                        </div>
                        <NavLink to="/events" className={styles.eventItem}>
                            <div className={styles.eventItemImg}>
                                <img
                                    src="https://res.cloudinary.com/dnxdsagpg/image/upload/v1719769513/hotel-site/events/culinary.jpg"
                                    alt="Well presented meat dish"/>
                            </div>
                            <h4>Culinary weekend</h4>
                            <p className={styles.eventDate}>Friday-Sunday</p>
                            <p className={styles.eventDescription}>Enjoy a curated menu of our local delicacies prepared
                                by
                                our top local chefs.</p>
                        </NavLink>
                        <NavLink to="/events" className={styles.eventItem}>
                            <div className={styles.eventItemImg}>
                                <img
                                    src="https://res.cloudinary.com/dnxdsagpg/image/upload/v1719769514/hotel-site/events/tea.jpg"
                                    alt="Filled tea cup surrounded by various kinds of tea leaves"/>
                            </div>
                            <h4>Tea gathering</h4>
                            <p className={styles.eventDate}>Monday-Tuesday</p>
                            <p className={styles.eventDescription}>Gather with fellow guests and experience our wide
                                variety
                                of imported teas from across the world.</p>
                        </NavLink>
                    </div>
                    <div className={styles.gridCol}>
                        <NavLink to="/events" className={styles.eventItem}>
                            <div className={styles.eventItemImg}>
                                <img
                                    src="https://res.cloudinary.com/dnxdsagpg/image/upload/v1719769514/hotel-site/events/wine.jpg"
                                    alt="Numerous stored wine bottles"/>
                            </div>
                            <h4>Wine tasting</h4>
                            <p className={styles.eventDate}>Thursday</p>
                            <p className={styles.eventDescription}>Experience the vast offering of our wine collection,
                                from
                                local delicacies to rare imports.</p>
                        </NavLink>
                        <NavLink to="/events" className={styles.eventItem}>
                            <div className={styles.eventItemImg}>
                                <img
                                    src="https://res.cloudinary.com/dnxdsagpg/image/upload/v1719769514/hotel-site/events/art.jpg"
                                    alt="Art exhibit featuring multiple paintings hung on the wall"/>
                            </div>
                            <h4>Art Exhibit</h4>
                            <p className={styles.eventDate}>Wednesday</p>
                            <p className={styles.eventDescription}>Enjoy a guided tour of our most renowned local
                                artists' finest work.</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventsSection;

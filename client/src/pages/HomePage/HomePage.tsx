import styles from "./HomePage.module.scss";
import ReservationSection from "./Reservation/ReservationSection.tsx";
import TestimonialSection from "./Testimonial/TestimonialSection.tsx";
import StatsSection from "./Stats/StatsSection.tsx";
import EventsSection from "./Events/EventsSection.tsx";
import ContactSection from "./Contact/ContactSection.tsx";
import NewsletterSection from "./Newsletter/NewsletterSection.tsx";
import { useEffect } from "react";

const HomePage = () => {
    useEffect(() => {
        document.title = "Alpine Luxury Suites";
    }, []);

    return (
        <div className={styles.homePage}>
            <div className={styles.homeImg}>
                <div className={styles.homeImgOverlay}>
                    <p className={styles.overlayText}>Your next luxury resort</p>
                </div>
            </div>
            <div className={styles.homeBody}>
                <ReservationSection />
                <TestimonialSection />
                <StatsSection />
                <EventsSection />
                <ContactSection />
                <NewsletterSection title="Stay up to date on our latest events" />
            </div>
        </div>
    );
};

export default HomePage;
import styles from "./HomePage.module.scss";
import ReservationSection from "./Reservation/ReservationSection.tsx";
import TestimonialSection from "./Testimonial/TestimonialSection.tsx";
import StatsSection from "./Stats/StatsSection.tsx";
import EventsSection from "./Events/EventsSection.tsx";
import ContactSection from "./Contact/ContactSection.tsx";

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <div className={styles.homeImg}></div>
            <div className={styles.homeBody}>
                <ReservationSection />
                <TestimonialSection />
                <StatsSection />
                <EventsSection />
                <ContactSection />
            </div>
        </div>
    );
};

export default HomePage;
import styles from "./ContactPage.module.scss";
import AnimatedLink from "../../components/AnimatedLink/AnimatedLink.tsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ContactPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Contact | Alpine Luxury Suites"
    }, []);

    return (
        <main className={styles.contactPage}>
            <div className={styles.imgBanner}>
                <img src="https://res.cloudinary.com/dnxdsagpg/image/upload/v1720158202/hotel-site/contact/lobby.jpg"
                     alt="Cozy hotel lobby with numerous tables and chairs"/>
            </div>
            <div className={styles.faqContainer}>
                <div className="container">
                    <div className={styles.contactGrid}>
                        <div className={styles.contactInfo}>
                            <h1>Questions?</h1>
                            <p className={styles.infoLarge}>Please contact us at <AnimatedLink href="mailto:alpinesuites@example.com">alpinesuites@example.com</AnimatedLink></p>
                            <p className={styles.infoSmall}>Consectetur adipisicing elit. Aliquam animi commodi
                                consectetur eligendi id neque praesentium ratione sint soluta vel?</p>
                            <p className={styles.infoLarge}>Call us at <AnimatedLink href="tel:1234567890">(123)-456-7890</AnimatedLink></p>
                            <p className={styles.infoSmall}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Impedit, modi!</p>
                            <iframe
                                className={styles.map}
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d517114.48453072866!2d-73.1485891001601!3d40.930359601664556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1720210474342!5m2!1sen!2sus"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                        <div className={styles.contactForm}>
                            <h2>How can we help?</h2>
                            <p>Esse sonet epicuri vim ea, timeam posidonium ea duo, diam euismod repudiare has eu. Eos suavitate ocurreret torquatos te, quot dictas ut nam, usu ex tincidunt deseruisse neglegentur. Per an labore quaerendum, usu vivendo qualisque in, ne appetere iracundia.</p>
                            <input type="text" className={styles.contactInput} placeholder="Your name"/>
                            <input type="email" className={styles.contactInput} placeholder="Email"/>
                            <textarea className={styles.contactTextarea} placeholder="Your message"></textarea>
                            <button className={styles.contactButton} onClick={() => navigate("/contactsubmit")}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
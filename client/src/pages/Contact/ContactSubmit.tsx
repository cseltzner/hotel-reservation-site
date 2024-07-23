import styles from "./ContactPage.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ContactSubmit = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Thank you | Alpine Luxury Suites"
    }, []);

    return (
        <main className={styles.contactPage}>
            <div className={styles.imgBanner}>
                <img src="https://res.cloudinary.com/dnxdsagpg/image/upload/v1720158202/hotel-site/contact/lobby.jpg"
                     alt="Cozy hotel lobby with numerous tables and chairs"/>
            </div>
            <div className={styles.contactThankYou}>
                <h1>Thank you for reaching out</h1>
                <p>Since this is a demonstration website, we will not be reaching out to your questions, but you can
                    contact me via Github using the link on the bottom right hand side of your screen</p>
                <button className={styles.contactButton} onClick={() => navigate("/contact")}>Return</button>
            </div>
        </main>
    );
};

export default ContactSubmit;
import styles from "./NewsletterCompleted.module.scss";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const NewsletterCompleted = () => {
    useEffect(() => {
        document.title = "Thank you | Alpine Luxury Suites"
    }, []);

    return (
        <main className={styles.newsletterPage}>
            <div className={styles.thankYouContainer}>
                <h1>Thank you for joining our newsletter!</h1>
                <p>Since this is a demo website, you will not be receiving any emails, but if you like the website so far, please use the button below to learn more</p>
                <NavLink to="/about" className={styles.button}>Learn more</NavLink>
            </div>
            <NavLink to="https://www.instagram.com" target="_blank" className={styles.img}>
                <img
                    src="https://res.cloudinary.com/dnxdsagpg/image/upload/v1720224144/hotel-site/newsletter/newsletter-completed-banner.jpg"
                    alt="Cozy bed with pillow, with a nightstand just to the left of the bed"/>
            </NavLink>
        </main>
    );
};

export default NewsletterCompleted;
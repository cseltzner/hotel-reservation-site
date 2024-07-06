import styles from "./NewsletterCompleted.module.scss";

const NewsletterCompleted = () => {
    return (
        <main className={styles.newsletterPage}>
            <div className={styles.thankYouContainer}>
                <h1>Thank you for joining our newsletter!</h1>
                <p>Since this is a demo website, you will not be receiving any emails, but if you like the website so far, please use the button below to learn more</p>
                <a href="/about" className={styles.button}>Learn more</a>
            </div>
            <a href="https://www.instagram.com" target="_blank" className={styles.img}>
                <img
                    src="https://res.cloudinary.com/dnxdsagpg/image/upload/v1720224144/hotel-site/newsletter/newsletter-completed-banner.jpg"
                    alt="Cozy bed with pillow, with a nightstand just to the left of the bed"/>
            </a>
        </main>
    );
};

export default NewsletterCompleted;
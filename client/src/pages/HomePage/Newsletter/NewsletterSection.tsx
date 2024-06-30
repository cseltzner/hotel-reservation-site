import styles from "./NewsletterSection.module.scss";

const NewsletterSection = () => {
    return (
        <section className={styles.newsletterSection}>
            <div className="container">
                <div className={styles.newsletterContainer}>
                    <h3>Stay up to date on our latest events</h3>
                    <div className={styles.inputContainer}>
                        <input type="text" placeholder="Email address"/>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;
import styles from "./NewsletterSection.module.scss";

interface Props {
    title: string;
}

const NewsletterSection = (props: Props) => {
    return (
        <section className={styles.newsletterSection}>
            <div className="container">
                <div className={styles.newsletterContainer}>
                    <h3>{props.title}</h3>
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
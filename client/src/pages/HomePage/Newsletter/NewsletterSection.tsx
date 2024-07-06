import styles from "./NewsletterSection.module.scss";
import { useNavigate } from "react-router-dom";

interface Props {
    title: string;
}

const NewsletterSection = (props: Props) => {
    const navigate = useNavigate();

    return (
        <section className={styles.newsletterSection}>
            <div className="container">
                <div className={styles.newsletterContainer}>
                    <h3>{props.title}</h3>
                    <div className={styles.inputContainer}>
                        <input type="text" placeholder="Email address"/>
                        <button onClick={() => navigate("/newslettercomplete")}>Send</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;
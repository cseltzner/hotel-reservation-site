import styles from "./NotFoundPage.module.scss";
import { NavLink, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <main className={styles.notFound}>
            <div className={styles.errorContainer}>
                <h1>Page Not Found</h1>
                <p>The page you are looking for does not exist or is no longer available. Please check that you have not mistyped the address in your browser's address bar.</p>
                <NavLink to="/"><button className={styles.button}>Return Home</button></NavLink>
            </div>
        </main>
    );
};

export default NotFoundPage;
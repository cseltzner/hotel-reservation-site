import styles from "./Header.module.scss";
import AnimatedLink from "../../components/AnimatedLink/AnimatedLink.tsx";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={`container ${styles.headerContainer}`}>
                <div className={styles.headerLeft}>
                    <AnimatedLink className={styles.headerItem} href="tel:1562409217">(156)-240-9217</AnimatedLink>
                    <AnimatedLink className={styles.headerItem} href="mailto:help@hotelseltz.com">help@hotelseltz.com</AnimatedLink>
                </div>
                <div className={styles.headerRight}>
                    <p className={styles.headerItem}>New York <span className={styles.tempDegrees}>80&deg;F</span></p>
                </div>
            </div>
        </div>
    );
};

export default Header;
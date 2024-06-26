import styles from "./HomePage.module.scss";

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <div className={styles.homeImg}></div>
            <div className={styles.homeBody}>
                <div className={styles.homeReservation}>
                    Reservation
                </div>
            </div>
        </div>
    );
};

export default HomePage;
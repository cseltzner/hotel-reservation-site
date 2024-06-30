import styles from "./StatsSection.module.scss";

const StatsSection = () => {
    return (
        <section className={styles.statsSection}>
            <div className="container">
                <h3 className={styles.statHeader}>A Luxury Getaway</h3>
                <p className={styles.statDescription}>Rooms and activities for your whole family</p>
                <div className={styles.statContainer}>
                    <div className={styles.statItem}>
                        <p className={styles.statItemHeader}>Swimming pools</p>
                        <p className={styles.statItemDescription}>3</p>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.statItem}>
                        <p className={styles.statItemHeader}>Suites</p>
                        <p className={styles.statItemDescription}>124</p>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.statItem}>
                        <p className={styles.statItemHeader}>Bars and restaurants</p>
                        <p className={styles.statItemDescription}>4</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
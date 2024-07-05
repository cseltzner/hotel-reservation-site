import styles from "./AboutPage.module.scss";
import AnimatedLink from "../../components/AnimatedLink/AnimatedLink.tsx";

const AboutPage = () => {
    return (
        <main className={styles.aboutPage}>
            <div className={styles.imgBanner}>
                <img
                    src="https://res.cloudinary.com/dnxdsagpg/image/upload/v1720220478/hotel-site/about/about-banner.jpg"
                    alt="Outside of hotel with palm trees in front"/>
            </div>
            <div className={styles.aboutContainer}>
                <div className="container">
                    <div className={styles.aboutGrid}>
                        <div className={styles.gridInfo}>
                            <h1>Alpine Luxury Suites</h1>
                            <p className={styles.infoSubtitle}>A demo hotel reservation website by Chase Seltzner</p>
                            <h2>Contact Chase</h2>
                            <p className={styles.contactText}><AnimatedLink
                                href="mailto:chase.seltz21@gmail.com" targetBlank>chase.seltz21@gmail.com</AnimatedLink>
                            </p>
                            <p className={styles.contactText}><AnimatedLink
                                href="https://www.github.com/cseltzner" targetBlank>Github</AnimatedLink></p>
                            <p className={styles.contactText}><AnimatedLink
                                href="https://www.github.com/cseltzner/hotel-reservation-site"
                                targetBlank
                            >Source Code</AnimatedLink></p>
                        </div>
                        <div className={styles.gridDetails}>
                            <p><span className={styles.authorName}>I'm Chase Seltzner,</span> a junior web developer
                                working with various technologies to create
                                interactive and beautiful web sites. I am always looking for new opportunities, so if
                                you are interested in my work, please reach out to me, I would love to hear from
                                you!</p>
                            <p>I created this site as a demonstration of my work, both on the frontend and on the
                                backend. The backend uses ASP.NET core with a Postgres database, while the frontend uses
                                React with various Radix primitive components throughout. All styling and animations
                                were created by me using SCSS. The site is fully responsive all the way down to 300px
                                screens. Give
                                it a try!</p>
                            <a href="/" className={styles.button}>Return Home</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AboutPage;
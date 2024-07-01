import styles from "./Footer.module.scss";
import { RoomName } from "../../interfaces/RoomName.ts";
import AnimatedLink from "../../components/AnimatedLink/AnimatedLink.tsx";
import Facebook from "../../components/Icons/Facebook.tsx";
import Twitter from "../../components/Icons/Twitter.tsx";
import Instagram from "../../components/Icons/Instagram.tsx";

interface Props {
    roomNames: RoomName[];
}

const Footer = (props: Props) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerPrimary}>
                <div className={styles.footerCol}>
                    <p className={styles.footerColHeader}>Useful Links</p>
                    <AnimatedLink href="/" isWhite className={styles.footerColItem}>Home</AnimatedLink>
                    <AnimatedLink href="/menu" isWhite className={styles.footerColItem}>Restaurant Menu</AnimatedLink>
                    <AnimatedLink href="/events" isWhite className={styles.footerColItem}>Events</AnimatedLink>
                </div>
                <div className={styles.footerCol}>
                    <AnimatedLink href="/rooms" isWhite className={styles.footerColHeader}>Rooms</AnimatedLink>
                    {props.roomNames.map(room => (
                        <AnimatedLink href={`rooms/${room.id}`} isWhite
                                      className={styles.footerColItem}>{room.name}</AnimatedLink>
                    ))}
                </div>
                <div className={styles.footerCol}>
                    <p className={styles.footerColHeader}>Community</p>
                    <AnimatedLink href="#" isWhite className={styles.footerColItem}>Blog</AnimatedLink>
                    <AnimatedLink href="https://www.facebook.com" isWhite className={styles.footerColItem}><Facebook className={styles.socialIcon} /> Facebook</AnimatedLink>
                    <AnimatedLink href="https://www.twitter.com" isWhite className={styles.footerColItem}><Twitter className={styles.socialIcon} /> Twitter</AnimatedLink>
                    <AnimatedLink href="https://www.instagram.com" isWhite className={styles.footerColItem}><Instagram className={styles.socialIcon} /> Instagram</AnimatedLink>
                </div>
                <div className={styles.footerCol}>
                    <p className={styles.footerColHeader}>Company</p>
                    <AnimatedLink href="#" isWhite className={styles.footerColItem}>FAQ</AnimatedLink>
                    <AnimatedLink href="#" isWhite className={styles.footerColItem}>About Us</AnimatedLink>
                    <AnimatedLink href="#" isWhite className={styles.footerColItem}>Privacy Policy</AnimatedLink>
                    <AnimatedLink href="#" isWhite className={styles.footerColItem}>Contact Us</AnimatedLink>
                </div>
            </div>
            <div className={styles.footerSecondary}>
                <small>&copy; 2024 Alpine Luxury Suites</small>
            </div>
        </footer>
    );
};

export default Footer;
import styles from "./ContactSection.module.scss"
import AnimatedLink from "../../../components/AnimatedLink/AnimatedLink.tsx";

const ContactSection = () => {
    return (
        <section className={styles.contactSection}>
            <div className="container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31335.566924621948!2d-71.73243960352036!3d41.32949922741177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1719773793670!5m2!1sen!2sus"
                    className={styles.map}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className={styles.contactHeader}>
                    <h3>How to contact us</h3>
                    <p>Our trained staff are ready to answer any questions you might have, and are happy to discuss any special requests.</p>
                </div>
                <ul className={styles.contactList}>
                    <li className={styles.contactItem}>
                        <p className={styles.contactItemHeader}>Email</p>
                        <AnimatedLink href="mailto:alpinesuites@example.com" className={styles.contactItemDescription}>alpinesuites@example.com</AnimatedLink>
                    </li>
                    <li className={styles.contactItem}>
                        <p className={styles.contactItemHeader}>Phone</p>
                        <AnimatedLink href="tel:1234567890" className={styles.contactItemDescription}>(123)-456-7890</AnimatedLink>
                    </li>
                    <li className={styles.contactItem}>
                        <p className={styles.contactItemHeader}>Address</p>
                        <p className={styles.contactItemDescription}>123 Alpine Drive</p>
                        <p>New York City</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default ContactSection;
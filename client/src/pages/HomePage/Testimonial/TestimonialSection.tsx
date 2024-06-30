import styles from "./TestimonialSection.module.scss";

const TestimonialSection = () => {
    return (
        <section className={styles.testimonialSection}>
            <div className="container">
                <div className={styles.testimonialGrid}>
                    <div className={styles.gridRow1}>
                        <blockquote className={styles.testimonialQuote}>"All throughout my stay I was accompanied by a
                            luxurious atmosphere and friendly staff" <span className={styles.testimonialSignature}>- Roy Smith</span>
                        </blockquote>
                        <img
                            src="https://res.cloudinary.com/dnxdsagpg/image/upload/v1719600940/hotel-site/testimonials/testimonial-4.jpg"
                            alt="Dining table with plates and glasses"/>
                        <img
                            src="https://res.cloudinary.com/dnxdsagpg/image/upload/v1719600940/hotel-site/testimonials/testimonial-2.jpg"
                            alt="Hotel bed sitting next to a pool next to the ocean"/>
                    </div>
                    <div className={styles.gridRow2}>
                        <img
                            src="https://res.cloudinary.com/dnxdsagpg/image/upload/v1719600941/hotel-site/testimonials/testimonial-3.jpg"
                            alt="Inside of hotel with chairs surrounding a small table"/>
                        <img
                            src="https://res.cloudinary.com/dnxdsagpg/image/upload/v1719600941/hotel-site/testimonials/testimonial-5.jpg"
                            alt="Luxury hotel bathtub"/>
                        <img
                            src="https://res.cloudinary.com/dnxdsagpg/image/upload/v1719600940/hotel-site/testimonials/testimonial-6.jpg"
                            alt="Luxury hotel dining food"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
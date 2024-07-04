import styles from "./MenuPage.module.scss";
import NewsletterSection from "../HomePage/Newsletter/NewsletterSection.tsx";

const MenuPage = () => {
    return (
        <main className={styles.menuPage}>
            <div className={styles.imgBanner}>
                <img src="https://res.cloudinary.com/dnxdsagpg/image/upload/v1720067391/hotel-site/menu/food-banner.jpg"
                     alt="Large spread of food on multiple plates"/>
            </div>
            <div className={` ${styles.menuContainer}`}>
                <div className={styles.menu}>
                    <h1>Today's Menu</h1>
                    <div className={styles.menuSection}>
                        <h2>Appetizers</h2>
                        <div className={styles.menuGrid}>
                            <div className={styles.menuGridItem}>
                                <h3>Stuffed Mushrooms</h3>
                                <p className={styles.menuItemDescription}>Pellentesque commodo massa dolor, id fermentum
                                    nunc fermentum at. In nec turpis et purus tincidunt scelerisque placerat
                                    aliquam.</p>
                                <p className={styles.menuItemPrice}>$12</p>
                            </div>
                            <div className={styles.menuGridItem}>
                                <h3>Shrimp Platter</h3>
                                <p className={styles.menuItemDescription}>Sed eu ultricies sem. Sed in condimentum diam.
                                    Sed egestas pretium velit eu mollis. Integer interdum massa libero.</p>
                                <p className={styles.menuItemPrice}>$18</p>
                            </div>
                            <div className={styles.menuGridItem}>
                                <h3>Bruschetta</h3>
                                <p className={styles.menuItemDescription}>Orci varius natoque penatibus et magnis dis
                                    parturient montes, nascetur ridiculus mus.</p>
                                <p className={styles.menuItemPrice}>$15</p>
                            </div>
                            <div className={styles.menuGridItem}>
                                <h3>Spinach Artichoke Dip</h3>
                                <p className={styles.menuItemDescription}>Nam ultricies, sapien ac maximus hendrerit,
                                    urna turpis pretium ex, id viverra massa lectus et sem.</p>
                                <p className={styles.menuItemPrice}>$11</p>
                            </div>
                        </div>
                        <div className={styles.menuSection}>
                            <h2>Entrees</h2>
                            <div className={styles.menuGrid}>
                                <div className={styles.menuGridItem}>
                                    <h3>Caprese Chicken</h3>
                                    <p className={styles.menuItemDescription}>Pellentesque commodo massa dolor, id
                                        fermentum
                                        nunc fermentum at. In nec turpis et purus tincidunt scelerisque placerat
                                        aliquam.</p>
                                    <p className={styles.menuItemPrice}>$21</p>
                                </div>
                                <div className={styles.menuGridItem}>
                                    <h3>Lobster Ravioli</h3>
                                    <p className={styles.menuItemDescription}>Sed eu ultricies sem. Sed in condimentum
                                        diam.
                                        Sed egestas pretium velit eu mollis. Integer interdum massa libero.</p>
                                    <p className={styles.menuItemPrice}>$30</p>
                                </div>
                                <div className={styles.menuGridItem}>
                                    <h3>Tikka Masala</h3>
                                    <p className={styles.menuItemDescription}>Orci varius natoque penatibus et magnis
                                        dis parturient montes, nascetur ridiculus mus.</p>
                                    <p className={styles.menuItemPrice}>$23</p>
                                </div>
                                <div className={styles.menuGridItem}>
                                    <h3>Salmon Rissoto</h3>
                                    <p className={styles.menuItemDescription}>Nam ultricies, sapien ac maximus
                                        hendrerit, urna turpis pretium ex, id viverra massa lectus et sem.</p>
                                    <p className={styles.menuItemPrice}>$28</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.menuSection}>
                            <h2>Desserts</h2>
                            <div className={styles.menuGrid}>
                                <div className={styles.menuGridItem}>
                                    <h3>Strawberry Swirl Cheesecake</h3>
                                    <p className={styles.menuItemDescription}>Pellentesque commodo massa dolor, id
                                        fermentum
                                        nunc fermentum at. In nec turpis et purus tincidunt scelerisque placerat
                                        aliquam.</p>
                                    <p className={styles.menuItemPrice}>$8</p>
                                </div>
                                <div className={styles.menuGridItem}>
                                    <h3>Tiramisu</h3>
                                    <p className={styles.menuItemDescription}>Sed eu ultricies sem. Sed in condimentum
                                        diam.
                                        Sed egestas pretium velit eu mollis. Integer interdum massa libero.</p>
                                    <p className={styles.menuItemPrice}>$12</p>
                                </div>
                                <div className={styles.menuGridItem}>
                                    <h3>Chocolate Ganache Cake</h3>
                                    <p className={styles.menuItemDescription}>Orci varius natoque penatibus et magnis
                                        dis parturient montes, nascetur ridiculus mus.</p>
                                    <p className={styles.menuItemPrice}>$9</p>
                                </div>
                                <div className={styles.menuGridItem}>
                                    <h3>Cherry Galette</h3>
                                    <p className={styles.menuItemDescription}>Nam ultricies, sapien ac maximus
                                        hendrerit, urna turpis pretium ex, id viverra massa lectus et sem.</p>
                                    <p className={styles.menuItemPrice}>$8</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <a href="https://www.instagram.com" target="_blank" className={styles.img}>
                    <img
                        src="https://res.cloudinary.com/dnxdsagpg/image/upload/v1720126170/hotel-site/menu/food-1.jpg"
                        alt="Well presented food dish"/>
                </a>
                <a href="https://www.instagram.com" target="_blank" className={styles.img}>
                    <img
                        src="https://res.cloudinary.com/dnxdsagpg/image/upload/v1720122152/hotel-site/menu/food-2.jpg"
                        alt="Well presented food dish"/>
                </a>
                <a href="https://www.instagram.com" target="_blank" className={styles.img}>
                    <img
                        src="https://res.cloudinary.com/dnxdsagpg/image/upload/v1720131483/hotel-site/menu/food-3.jpg"
                        alt="Well presented food dish"/>
                </a>
                <a href="https://www.instagram.com" target="_blank" className={styles.img}>
                    <img
                        src="https://res.cloudinary.com/dnxdsagpg/image/upload/v1720122152/hotel-site/menu/food-4.jpg"
                        alt="Well presented food dish"/>
                </a>
            </div>
            <NewsletterSection title="Never Miss A Dish"/>
        </main>
    );
};

export default MenuPage;
import styles from "./NavMenu.module.scss"
import AnimatedLink from "../../components/AnimatedLink/AnimatedLink.tsx";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { useLocation } from "react-router-dom";

const NavMenu = () => {
    const location = useLocation();

    return (
        <NavigationMenu.Root className={styles.navRoot}>
            <NavigationMenu.List className={styles.navList}>
                <NavigationMenu.Item className={styles.navItem}>
                    <AnimatedLink className={styles.navItemHead} href={"/"}>Home</AnimatedLink>
                </NavigationMenu.Item>
                <NavigationMenu.Item className={styles.navItem}>
                    <NavigationMenu.Trigger className={styles.navTrigger}>
                        <AnimatedLink className={styles.navItemHead}>Pages</AnimatedLink>
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className={styles.navDropdown}>
                        <ul>
                            <li>
                                <AnimatedLink href="/events">Events</AnimatedLink>
                            </li>
                            <li>
                                <AnimatedLink href="/menu">Restaurant menu</AnimatedLink>
                            </li>
                            <li>
                                <AnimatedLink href="/about">About us</AnimatedLink>
                            </li>
                            <li>
                                <AnimatedLink href="/contact">FAQs</AnimatedLink>
                            </li>
                            <li>
                                <AnimatedLink href="/contact">Contact us</AnimatedLink>
                            </li>
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
                <NavigationMenu.Item className={styles.navItem}>
                    <NavigationMenu.Link href="/" className={styles.navLogo}>
                        <p className={styles.logoName}>Alpine</p>
                        <p className={styles.logoDescription}>Luxury Suites</p>
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item className={styles.navItem}>
                    <NavigationMenu.Trigger>
                        <AnimatedLink className={styles.navItemHead} href="/rooms">Rooms</AnimatedLink>
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className={styles.navDropdown}>
                    {/*  Room list goes here  */}
                        <ul>
                            <li><AnimatedLink href="#">Room 1</AnimatedLink></li>
                            <li><AnimatedLink href="#">Room 2</AnimatedLink></li>
                            <li><AnimatedLink href="#">Room 3</AnimatedLink></li>
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
                <NavigationMenu.Item className={styles.navItem}>
                    <AnimatedLink className={styles.navItemHead} href="/about">About</AnimatedLink>
                </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    );
};

export default NavMenu;
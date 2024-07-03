import styles from "./NavMenu.module.scss"
import AnimatedLink from "../../components/AnimatedLink/AnimatedLink.tsx";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { RoomName } from "../../interfaces/RoomName.ts";
import MenuMobile from "../../components/Icons/MenuMobile.tsx";
import { useState } from "react";
import Close from "../../components/Icons/Close.tsx";
import ChevronDown from "../../components/Icons/ChevronDown.tsx";
import ChevronRight from "../../components/Icons/ChevronRight.tsx";

interface Props {
    roomNames: RoomName[];
}

const NavMenu = (props: Props) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileNavItemOpen, setMobileNavItemOpen] = useState("");

    const onMenuClick = () => {
        setIsMobileMenuOpen(prevState => !prevState);
    }

    const onMobileNavClick = (id: string) => {
        if (id === mobileNavItemOpen) {
            setMobileNavItemOpen("");
        }
        else {
            setMobileNavItemOpen(id);
        }
    }

    const desktopMenu = (
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
                                <AnimatedLink href="/faq">FAQs</AnimatedLink>
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
                        <ul>
                            {props.roomNames.map(roomName => (
                                <li key={roomName.id}>
                                    <AnimatedLink href={`/rooms/${roomName.id}`}>{roomName.name}</AnimatedLink>
                                </li>
                            ))}
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
                <NavigationMenu.Item className={styles.navItem}>
                    <AnimatedLink className={styles.navItemHead} href="/about">About</AnimatedLink>
                </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    );

    const mobileMenu = (
        <nav className={styles.mobileNavMenu}>
            {/* Logo on left */}
            <a href="/" className={styles.navLogo}>
                <p className={styles.logoName}>Alpine</p>
                <p className={styles.logoDescription}>Luxury Suites</p>
            </a>

            {/* Menu icon on right */}
            {isMobileMenuOpen ? (
                <Close className={styles.menuIcon} onClick={onMenuClick}/>
            ) : (
                <MenuMobile className={styles.menuIcon} onClick={onMenuClick}/>

            )}

            {/* Main mobile dropdown */}
            <div className={`${styles.mobileNavDropdown} ${isMobileMenuOpen ? styles.open : styles.closed}`}>
                <ul className={styles.mobileList}>
                    {/* List of mobile menu items */}
                    {/* Home */}
                    <li className={styles.mobileListItem}>
                        <a href="/" className={styles.mobileNavItemHeader}>Home</a>
                    </li>
                    {/* Pages */}
                    <li className={styles.mobileListItem}>
                        <div className={styles.mobileListNavItemHeading} onClick={() => onMobileNavClick("pages")}>
                            <button className={styles.mobileNavItemHeader}>Pages</button>
                            <div className={`${styles.chevron} ${mobileNavItemOpen === "pages" && styles.chevronOpen}`}>
                                <ChevronRight/>
                            </div>
                        </div>
                        {/* Pages sublist */}
                        <ul className={`${styles.mobileNavSubList} ${mobileNavItemOpen === "pages" && styles.open}`}>
                            <li><a href="/events">Events</a></li>
                            <li><a href="/menu">Restaurant menu</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/faq">FAQs</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </li>
                    {/* Rooms */}
                    <li className={styles.mobileListItem}>
                        <div className={styles.mobileListNavItemHeading} onClick={() => onMobileNavClick("rooms")}>
                            <button className={styles.mobileNavItemHeader}>Rooms</button>
                            <div className={`${styles.chevron} ${mobileNavItemOpen === "rooms" && styles.chevronOpen}`}>
                                <ChevronRight/>
                            </div>
                        </div>
                        {/* Rooms sublist */}
                        <ul className={`${styles.mobileNavSubList} ${mobileNavItemOpen === "rooms" && styles.open}`}>
                            {props.roomNames.map(room => (
                                <li key={room.id}><a href={`/rooms/${room.id}`}>{room.name}</a></li>
                            ))}
                        </ul>
                    </li>
                    {/* About */}
                    <li className={styles.mobileListItem}>
                        <a href="/about" className={styles.mobileNavItemHeader}>About</a>
                    </li>
                </ul>
            </div>
        </nav>
    )

    return (
        <>
            {desktopMenu}{mobileMenu}
        </>
    );
};

export default NavMenu;
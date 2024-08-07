import styles from "./NavMenu.module.scss"
import AnimatedLink from "../../components/AnimatedLink/AnimatedLink.tsx";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { RoomName } from "../../interfaces/RoomName.ts";
import MenuMobile from "../../components/Icons/MenuMobile.tsx";
import { useState } from "react";
import Close from "../../components/Icons/Close.tsx";
import ChevronDown from "../../components/Icons/ChevronDown.tsx";
import ChevronRight from "../../components/Icons/ChevronRight.tsx";
import ShoppingBag from "../../components/Icons/ShoppingBag.tsx";
import { useReservationContext } from "../../context/useReservationContext.ts";
import { NavLink, useNavigate } from "react-router-dom";

interface Props {
    roomNames: RoomName[];
}

const NavMenu = (props: Props) => {
    const navigate = useNavigate();
    const { bookingRooms } = useReservationContext();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileNavItemOpen, setMobileNavItemOpen] = useState("");

    const onMenuClick = () => {
        setIsMobileMenuOpen(prevState => !prevState);
    }

    const onMobileNavClick = (id: string) => {
        if (id === mobileNavItemOpen) {
            setMobileNavItemOpen("");
        } else {
            setMobileNavItemOpen(id);
        }
    }

    const onMobileNavItemClicked = () => {
        setIsMobileMenuOpen(false);
    }

    const onCartClicked = () => {
        navigate("cart");
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
                                <AnimatedLink href="/bookings">My Bookings</AnimatedLink>
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
                    <NavigationMenu.Link asChild className={styles.navLogo}>
                        <NavLink to="/">
                            <p className={styles.logoName}>Alpine</p>
                            <p className={styles.logoDescription}>Luxury Suites</p>
                        </NavLink>
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
            <button className={styles.cart} onClick={onCartClicked}>
                <div className={`${styles.cartQuantity} ${!bookingRooms.length ? styles.cartQuantityHidden : ""}`}
                >
                    {bookingRooms.length || ""}
                </div>
                <ShoppingBag className={styles.cartIcon}/>
            </button>
        </NavigationMenu.Root>
    );

    const mobileMenu = (
        <nav className={styles.mobileNavMenu}>
            {/* Menu icon on left */}
            {isMobileMenuOpen ? (
                <Close className={`${styles.menuIcon} ${styles.menuIconClose}`} onClick={onMenuClick}/>
            ) : (
                <MenuMobile className={styles.menuIcon} onClick={onMenuClick}/>

            )}

            {/* Logo in center */}
            <NavLink to="/" className={styles.navLogo}>
                <p className={styles.logoName}>Alpine</p>
                <p className={styles.logoDescription}>Luxury Suites</p>
            </NavLink>

            {/* Cart on right */}
            <button className={styles.cart} onClick={onCartClicked}>
                <div className={`${styles.cartQuantity} ${!bookingRooms.length ? styles.cartQuantityHidden : ""}`}
                >
                    {bookingRooms.length || ""}
                </div>
                <ShoppingBag className={styles.cartIcon}/>
            </button>

            {/* Main mobile dropdown */}
            <div className={`${styles.mobileNavDropdown} ${isMobileMenuOpen ? styles.open : styles.closed}`}>
                <ul className={styles.mobileList}>
                    {/* List of mobile menu items */}
                    {/* Home */}
                    <li className={styles.mobileListItem}>
                        <NavLink to="/" onClick={onMobileNavItemClicked} className={styles.mobileNavItemHeader}>Home</NavLink>
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
                            <li><NavLink to="/events" onClick={onMobileNavItemClicked}>Events</NavLink></li>
                            <li><NavLink to="/menu" onClick={onMobileNavItemClicked}>Restaurant Menu</NavLink></li>
                            <li><NavLink to="/bookings" onClick={onMobileNavItemClicked}>My Bookings</NavLink></li>
                            <li><NavLink to="/about" onClick={onMobileNavItemClicked}>About Us</NavLink></li>
                            <li><NavLink to="/faq" onClick={onMobileNavItemClicked}>FAQs</NavLink></li>
                            <li><NavLink to="/contact" onClick={onMobileNavItemClicked}>Contact Us</NavLink></li>
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
                            <li><NavLink to="/rooms" className={styles.fontLg} onClick={onMobileNavItemClicked}>All Rooms</NavLink></li>
                            {props.roomNames.map(room => (
                                <li key={room.id}><NavLink to={`/rooms/${room.id}`} onClick={onMobileNavItemClicked}>{room.name}</NavLink></li>
                            ))}
                        </ul>
                    </li>
                    {/* About */}
                    <li className={styles.mobileListItem}>
                        <NavLink to="/about" className={styles.mobileNavItemHeader} onClick={onMobileNavItemClicked}>About</NavLink>
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
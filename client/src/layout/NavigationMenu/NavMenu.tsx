import styles from "./NavMenu.module.scss"
import AnimatedLink from "../../components/AnimatedLink/AnimatedLink.tsx";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { useEffect, useState } from "react";
import { RoomName } from "../../interfaces/RoomName.ts";
import { apiUrls } from "../../http/urls.ts";

const NUM_ROOM_NAMES_TO_FETCH = 5; // Used to fetch a certain number of room names from API for "Rooms" tab dropdown

const NavMenu = () => {
    const [roomNames, setRoomNames] = useState<RoomName[]>([]);

    useEffect(() => {
        const fetchRoomNames = async () => {
            const response = await fetch(apiUrls.getRoomNames(NUM_ROOM_NAMES_TO_FETCH))
            setRoomNames(await response.json());
        }

        fetchRoomNames().then();
    }, []);

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
                            {roomNames.map(roomName => (
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
};

export default NavMenu;
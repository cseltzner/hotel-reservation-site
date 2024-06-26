import styles from "./AnimatedLink.module.scss";
import { CSSProperties, ReactNode } from "react";

interface Props {
    children?: ReactNode;
    href?: string;
    className?: string;
    styles?: CSSProperties;
}

const Link = (props: Props) => {
    return (
        <a className={`${styles.link} ${props.className || ""}`} style={props.styles} href={props.href}>
            {props.children}
        </a>
    );
};

export default Link;
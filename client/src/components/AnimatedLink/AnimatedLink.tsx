import styles from "./AnimatedLink.module.scss";
import { CSSProperties, ReactNode } from "react";

interface Props {
    children?: ReactNode;
    href?: string;
    className?: string;
    styles?: CSSProperties;
    isWhite?: boolean;
    targetBlank?: boolean;
}

const Link = (props: Props) => {
    return (
        <a className={`${styles.link} ${props.className || ""} ${props.isWhite && styles.linkWhite}`} style={props.styles} href={props.href} target={`${props.targetBlank ? "_blank" : ""}`}>
            {props.children}
        </a>
    );
};

export default Link;
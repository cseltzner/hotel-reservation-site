import styles from "./AnimatedLink.module.scss";
import { CSSProperties, ReactNode } from "react";
import { NavLink } from "react-router-dom";

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
        <NavLink className={`${styles.link} ${props.className || ""} ${props.isWhite && styles.linkWhite}`} style={props.styles} to={props.href || ""} target={`${props.targetBlank ? "_blank" : ""}`}>
            {props.children}
        </NavLink>
    );
};

export default Link;
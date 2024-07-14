interface Props {
    onClick?: () => void;
    className?: string;
}

const Close = (props: Props) => {
    return (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5"
             className={props.className}
             onClick={props.onClick}
             >
            <circle className="cls-6374f8d9b67f094e4896c61e-1" cx="12" cy="12" r="10.5"></circle>
            <line className="cls-6374f8d9b67f094e4896c61e-1" x1="16.77" y1="7.23" x2="7.23" y2="16.77"></line>
            <line className="cls-6374f8d9b67f094e4896c61e-1" x1="7.23" y1="7.23" x2="16.77" y2="16.77"></line>
        </svg>
    );
};

export default Close;
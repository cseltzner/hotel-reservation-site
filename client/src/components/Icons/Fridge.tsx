interface Props {
    className?: string
}

const Fridge = (props: Props) => {
    return (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5"
             className={props.className}
             >
            <path className="cls-637b72d8f95e86b59c579e93-1"
                  d="M7.23,1.5h9.55a1.91,1.91,0,0,1,1.91,1.91V22.5a0,0,0,0,1,0,0H5.32a0,0,0,0,1,0,0V3.41A1.91,1.91,0,0,1,7.23,1.5Z"></path>
            <path className="cls-637b72d8f95e86b59c579e93-1"
                  d="M7.23,1.5h9.55a1.91,1.91,0,0,1,1.91,1.91v6.68a0,0,0,0,1,0,0H5.32a0,0,0,0,1,0,0V3.41A1.91,1.91,0,0,1,7.23,1.5Z"></path>
            <line className="cls-637b72d8f95e86b59c579e93-1" x1="8.18" y1="4.36" x2="8.18" y2="7.23"></line>
            <line className="cls-637b72d8f95e86b59c579e93-1" x1="8.18" y1="12.95" x2="8.18" y2="15.82"></line>
        </svg>
    );
};

export default Fridge;
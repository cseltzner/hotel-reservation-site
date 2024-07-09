interface Props {
    className?: string
}

const SwimmingPool = (props: Props) => {
    return (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5"
             className={props.className}
             >
            <defs>
            </defs>
            <path className="cls-637b82edf95e86b59c57a0bb-1"
                  d="M22.5,14.86V22.5H1.5V14.86h1a3.46,3.46,0,0,0,4.77,0h0a3.45,3.45,0,0,0,4.76,0h0a3.45,3.45,0,0,0,4.76,0h0a3.46,3.46,0,0,0,4.77,0h1Z"></path>
            <path className="cls-637b82edf95e86b59c57a0bb-1" d="M7.23,14.86V4.36A2.86,2.86,0,0,1,10.09,1.5"></path>
            <path className="cls-637b82edf95e86b59c57a0bb-1" d="M14.86,15.79V4.36A2.86,2.86,0,0,1,17.73,1.5"></path>
            <line className="cls-637b82edf95e86b59c57a0bb-1" x1="7.23" y1="6.27" x2="14.86" y2="6.27"></line>
            <line className="cls-637b82edf95e86b59c57a0bb-1" x1="7.23" y1="11.05" x2="14.86" y2="11.05"></line>
        </svg>
    );
};

export default SwimmingPool;
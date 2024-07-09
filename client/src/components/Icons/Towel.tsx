interface Props {
    className?: string
}

const Towel = (props: Props) => {
    return (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5"
             className={props.className}
             >
            <path className="cls-637a534e15c5759009400734-1"
                  d="M9.14,6.25V4.34A1.92,1.92,0,0,0,7.23,2.43h9.54a1.92,1.92,0,0,1,1.91,1.91V6.25"></path>
            <polyline className="cls-637a534e15c5759009400734-1"
                      points="1.5 0.52 1.5 6.25 5.32 6.25 9.14 6.25"></polyline>
            <polyline className="cls-637a534e15c5759009400734-1" points="22.5 0.52 22.5 6.25 18.68 6.25"></polyline>
            <polyline className="cls-637a534e15c5759009400734-1"
                      points="9.14 6.25 9.14 14.84 9.14 22.48 18.68 22.48 18.68 6.25"></polyline>
            <path className="cls-637a534e15c5759009400734-1"
                  d="M9.14,4.34v10.5H5.32V4.34a1.91,1.91,0,0,1,3.82,0Z"></path>
            <line className="cls-637a534e15c5759009400734-1" x1="10.09" y1="18.66" x2="18.68" y2="18.66"></line>
        </svg>
    );
};

export default Towel;
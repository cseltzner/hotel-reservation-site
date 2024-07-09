interface Props {
    className?: string
}

const Plane = (props: Props) => {
    return (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5"
             className={props.className}
             >
            <path className="cls-637b88e7f95e86b59c57a1df-1"
                  d="M5.64,18.36h0a1.6,1.6,0,0,1-.23-2l3.86-6.18,7.24-7.24A3.24,3.24,0,0,1,18.79,2h0A3.21,3.21,0,0,1,22,5.21h0a3.24,3.24,0,0,1-.94,2.28l-7.24,7.24L7.64,18.59A1.6,1.6,0,0,1,5.64,18.36Z"></path>
            <polygon className="cls-637b88e7f95e86b59c57a1df-1"
                     points="18.36 10.18 14.73 13.82 19.27 22 22 20.18 18.36 10.18"></polygon>
            <polygon className="cls-637b88e7f95e86b59c57a1df-1"
                     points="13.82 5.64 10.18 9.27 2 4.73 3.82 2 13.82 5.64"></polygon>
            <polyline className="cls-637b88e7f95e86b59c57a1df-1"
                      points="7 13.82 2.91 13.82 2 16.55 5.64 18.36 7.46 22 10.18 21.09 10.18 17"></polyline>
        </svg>
    );
};

export default Plane;
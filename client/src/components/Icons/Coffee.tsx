interface Props {
    className?: string
}

const Coffee = (props: Props) => {
    return (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5"
             className={props.className}
             >
            <path className="cls-637b72d8f95e86b59c579e97-1"
                  d="M1.48,8.18H15.8a0,0,0,0,1,0,0v7.24A7.08,7.08,0,0,1,8.72,22.5H8.56a7.08,7.08,0,0,1-7.08-7.08V8.18a0,0,0,0,1,0,0Z"></path>
            <ellipse className="cls-637b72d8f95e86b59c579e97-1" cx="19.14" cy="12.88" rx="3.34" ry="3.42"></ellipse>
            <line className="cls-637b72d8f95e86b59c579e97-1" x1="0.52" y1="22.5" x2="16.75" y2="22.5"></line>
            <path className="cls-637b72d8f95e86b59c579e97-1" d="M3.39,1.5c1.65,1.91-.7,2.86.95,4.77"></path>
            <path className="cls-637b72d8f95e86b59c579e97-1" d="M8.16,1.5c1.65,1.91-.7,2.86.95,4.77"></path>
            <path className="cls-637b72d8f95e86b59c579e97-1" d="M12.93,1.5c1.66,1.91-.7,2.86,1,4.77"></path>
        </svg>
    );
};

export default Coffee;
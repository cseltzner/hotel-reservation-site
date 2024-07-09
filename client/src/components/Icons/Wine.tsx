interface Props {
    className?: string
}

const Wine = (props: Props) => {
    return (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5"
             className={props.className}
             >
            <path className="cls-637b6ef7f95e86b59c579df2-1"
                  d="M5.32,1.5H18.68a0,0,0,0,1,0,0V8.18A6.68,6.68,0,0,1,12,14.86h0A6.68,6.68,0,0,1,5.32,8.18V1.5a0,0,0,0,1,0,0Z"></path>
            <line className="cls-637b6ef7f95e86b59c579df2-1" x1="12" y1="22.5" x2="12" y2="14.86"></line>
            <line className="cls-637b6ef7f95e86b59c579df2-1" x1="16.77" y1="22.5" x2="7.23" y2="22.5"></line>
            <path className="cls-637b6ef7f95e86b59c579df2-1" d="M5.32,7.23C12,4.36,12,10.09,18.68,7.23"></path>
        </svg>
    );
};

export default Wine;
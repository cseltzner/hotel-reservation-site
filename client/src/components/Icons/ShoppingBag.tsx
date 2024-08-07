interface Props {
    className?: string;
}

const ShoppingBag = (props: Props) => {
    return (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5"
             className={props.className}
        >
            <path className="cls-6374f8d9b67f094e4896c663-1"
                  d="M3.41,7.23H20.59a0,0,0,0,1,0,0V19.64a2.86,2.86,0,0,1-2.86,2.86H6.27a2.86,2.86,0,0,1-2.86-2.86V7.23A0,0,0,0,1,3.41,7.23Z"></path>
            <path className="cls-6374f8d9b67f094e4896c663-1"
                  d="M7.23,10.09V6.27A4.77,4.77,0,0,1,12,1.5h0a4.77,4.77,0,0,1,4.77,4.77v3.82"></path>
        </svg>
    );
};

export default ShoppingBag;
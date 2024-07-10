interface Props {
    className?: string;
}

const Person = (props: Props) => {
    return (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5"
             className={props.className}
             >
            <circle className="cls-6374f8d9b67f094e4896c670-1" cx="12" cy="7.25" r="5.73"></circle>
            <path className="cls-6374f8d9b67f094e4896c670-1"
                  d="M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13h0a10.3,10.3,0,0,1,10.13,8.45l.37,2.05"></path>
        </svg>
    );
};

export default Person;
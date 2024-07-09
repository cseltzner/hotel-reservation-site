interface Props {
    className?: string
}

const Breakfast = (props: Props) => {
    return (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5"
             className={props.className}
             >
            <circle className="cls-637b6ef7f95e86b59c579dbe-1" cx="10.09" cy="12" r="4.77"></circle>
            <path className="cls-637b6ef7f95e86b59c579dbe-1"
                  d="M11.51,1.5c2.86,0,6.69,0,8.78,3.05,3.51,5.11-2.85,7.85,0,9.81s2.68,5.57,1,6.86c-3.28,2.45-7.1-2.59-11.65.65C5.7,24.65-.19,17.78,2,10.23,3.06,6.35,6.73,1.5,11.51,1.5Z"></path>
        </svg>
    );
};

export default Breakfast;
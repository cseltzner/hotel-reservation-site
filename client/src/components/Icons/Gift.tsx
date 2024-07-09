interface Props {
    className?: string
}

const Gift = (props: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" width="24" height="24"
             className={props.className}
            >
            <g id="gift">
                <rect className="cls-6375f1aeb67f094e4896ca1b-1" x="3.41" y="11.05" width="17.18" height="11.45"></rect>
                <rect className="cls-6375f1aeb67f094e4896ca1b-1" x="2.45" y="7.23" width="19.09" height="3.82"></rect>
                <rect className="cls-6375f1aeb67f094e4896ca1b-1" x="12" y="11.05" width="0.01" height="11.45"></rect>
                <rect className="cls-6375f1aeb67f094e4896ca1b-1" x="11.99" y="8.18" width="0.01" height="17.18"
                      transform="translate(28.77 4.77) rotate(90)"></rect>
                <path className="cls-6375f1aeb67f094e4896ca1b-1"
                      d="M7.23,1.5h0A4.77,4.77,0,0,1,12,6.27v1a0,0,0,0,1,0,0H9.14A3.82,3.82,0,0,1,5.32,3.41v0A1.91,1.91,0,0,1,7.23,1.5Z"></path>
                <path className="cls-6375f1aeb67f094e4896ca1b-1"
                      d="M15.82,1.5h2.86a0,0,0,0,1,0,0v1a4.77,4.77,0,0,1-4.77,4.77h0A1.91,1.91,0,0,1,12,5.32v0A3.82,3.82,0,0,1,15.82,1.5Z"
                      transform="translate(30.68 8.73) rotate(-180)"></path>
            </g>
        </svg>
    );
};

export default Gift;
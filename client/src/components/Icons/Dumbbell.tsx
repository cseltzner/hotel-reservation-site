interface Props {
    className?: string
}

const Dumbbell = (props: Props) => {
    return (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5"
             className={props.className}
        >
            <defs>
            </defs>
            <path className="cls-637a534e15c575900940071c-1"
                  d="M20.48,11.05h0a2,2,0,0,0,2-2h0a2,2,0,0,0-.59-1.43l-5.5-5.5A2,2,0,0,0,15,1.5h0a2,2,0,0,0-2,2h0A2,2,0,0,0,13.55,5L19,10.45A2,2,0,0,0,20.48,11.05Z"></path>
            <path className="cls-637a534e15c575900940071c-1"
                  d="M9,22.5H9a2,2,0,0,0,2-2h0a2,2,0,0,0-.6-1.44L5,13.55A2,2,0,0,0,3.52,13h0a2,2,0,0,0-2,2h0a2,2,0,0,0,.59,1.43l5.5,5.5A2,2,0,0,0,9,22.5Z"></path>
            <rect className="cls-637a534e15c575900940071c-1" x="10.09" y="5.93" width="3.82" height="12.15"
                  transform="translate(12 -4.97) rotate(45)"></rect>
        </svg>
    );
};

export default Dumbbell;
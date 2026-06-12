
type varients = "primary" | "secondary";
type sizes = "sm" | "md" | "lg";

export interface ButtonProps {
    varient: varients;
    size: sizes;
    text: string;
    startIcon?: any;
    endIcon?: any;
    onClick: () => void;
}

const VarientStyle = {
    "primary": "bg-purple-600 text-white hover:bg-purple-700",
    "secondary": "bg-white border border-purple-200 text-purple-700 hover:bg-purple-50"
};

const sizeStyle = {
    "sm": "px-3 py-2 text-sm",
    "md": "px-4 py-3 text-sm",
    "lg": "px-5 py-4 text-base"
};

const defaultStyle = "inline-flex items-center justify-center gap-2 rounded-3xl font-semibold transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-200";

export const Button = (props: ButtonProps) => {
    return (
        <button className={`${VarientStyle[props.varient]} ${defaultStyle} ${sizeStyle[props.size]}`} onClick={props.onClick}>
            {props.startIcon ? <span className="flex items-center">{props.startIcon}</span> : null}
            <span>{props.text}</span>
            {props.endIcon ? <span className="flex items-center">{props.endIcon}</span> : null}
        </button>
    );
};


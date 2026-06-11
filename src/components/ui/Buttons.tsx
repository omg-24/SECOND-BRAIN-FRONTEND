
type varients = "primary" | "secondary"
type sizes = "sm" | "md" | "lg"

export interface ButtonProps {
    varient: varients,
    size: sizes,
    text: string,
    startIcon?: any,
    endIcon?: any,
    onClick: () => void;
}

const VarientStyle = {
    "primary": "bg-purple-600 text-purple-300",
    "secondary": "bg-purple-300 text-purple-500"

}
const sizeStyle = {
    "sm": "py-1 px-2",
    "md": "py-2 px-4",
    "lg": "py-4 px-6"
}

const defaultStyle = "rounded-md flex cursor-pointer hover:bg-purple-400"

export const Button = ( props: ButtonProps) =>{
    return <button className={`${VarientStyle[props.varient]} ${defaultStyle} ${sizeStyle[props.size]} `} onClick={props.onClick}> 
    {props.startIcon ? <div className="pr-2" >{props.startIcon}</div> : null}
    {props.text} {props.endIcon}
    </button>
}



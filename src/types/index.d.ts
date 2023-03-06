// images types declaration
declare module "*.jpg";
declare module "*.png";
declare module "*.svg";

// button props types
export interface ButtonProps {
    content : string,
    onClick :  any,
    type : boolean
}

// modal props types
export interface Props {
     onClick : () => void
}


// show modal types
export type ShowModalTypes = [boolean, React.Dispatch<React.SetStateAction<boolean>>]

// option value types
export interface OptionValueTypes {
    value : number,
    label : string   
}
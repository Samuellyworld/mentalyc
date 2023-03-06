// images types declaration
declare module "*.jpg";
declare module "*.png";
declare module "*.svg";

// button props types
export interface ButtonProps {
    content : string,
    onClick : () => void
}

// modal props types
export interface ModalProps {
     onClick : () => void
}


// show modal types
export type ShowModalTypes = [boolean, React.Dispatch<React.SetStateAction<boolean>>]

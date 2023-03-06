// images types declaration
declare module "*.jpg";
declare module "*.png";
declare module "*.svg";

// button props types
export interface ButtonProps {
    content : string,
    onClick :  string | undefined | MouseEventHandler<HTMLButtonElement>,
    type : boolean,
    values : undefined | string | {
        noteType : null | any,
        clientName : string
        } | null | any
}

// modal props types
export interface Props {
     onClick : () => void
}


// show modal types
export type ShowModalTypes = [boolean, React.Dispatch<React.SetStateAction<boolean>>]

// modal values types
export type ModalValuesTypes = [{
    noteType : null | any,
    clientName : string
    }, React.Dispatch<React.SetStateAction<{
    noteType : null | any,
    clientName : string
    }>>];


// option value types
export interface OptionValueTypes {
    value : number,
    label : string   
}
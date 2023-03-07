// images types declaration
declare module "*.jpg";
declare module "*.png";
declare module "*.svg";

// nested object types for both note types and clientName
export interface ValuesObjectTypes {
    [key: string ]: string | NestedObject | number;
}

interface NestedObject {
    [key: string]: string;
  }
  

// button props types
export interface ButtonProps {
    content : string,
    onClick :  string | undefined | MouseEventHandler<HTMLButtonElement>,
    type : boolean,
    values : ValuesObjectTypes | string | any
}

// modal props types
export interface ModalPropsTypes {
     onClick : () => void,
     onSubmit : (arg : ValuesObjectTypes) => void
}

// main props types
export interface MainPropsTypes {
    onClick : () => void
}


// show modal types
export type ShowModalTypes = [boolean, React.Dispatch<React.SetStateAction<boolean>>]

// uploadedItems types 
export type UploadItemsTypes = [ array<T> , React.Dispatch<React.SetStateAction<array<T>>>];

// modal values types
export type ModalValuesTypes = [{
    noteType : null | any,
    clientName : string,
    }, React.Dispatch<React.SetStateAction<{
    noteType : null | any,
    clientName : string,
    }>>];


// option value types
export interface OptionValueTypes {
    value : number,
    label : string   
}


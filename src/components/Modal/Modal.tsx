// import custom styles
import { ModalBackground, ModalContent,
         CloseButton, ModalHeader, ModalSubContent 
        } from "./Modal.styles";

import { useState } from "react";
// import select from react-select
import Select from 'react-select';

// import props types from types
import { Props } from "../../types";

// import note types from utils
import { noteTypes } from "../../utils/utils";
import Button from "../Button/Button";

import { dropDownCustomStyles } from "../../utils/utils";

// Modal JSX Component
const Modal : React.FC<Props> = ({onClick}) => {

    // set initial se
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (option : any) => {
        setSelectedOption(option);
        console.log(selectedOption)
      };
    
    return (
        <ModalBackground>
            <ModalContent>
                <CloseButton onClick={onClick}>&times;</CloseButton>
                <ModalHeader>Complete Your Upload</ModalHeader>
                <ModalSubContent>Fill in the details below to complete your upload</ModalSubContent>
                <form>
                    <Select 
                        value={selectedOption}
                        onChange={handleChange}
                        options={noteTypes}
                        styles={dropDownCustomStyles}
                        placeholder="Note Type"
                        />
                    <input type="text" placeholder="Client name" />
                    <Button content={"Finish Upload"} type={false} onClick={''}/>
                </form>
            </ModalContent>
        </ModalBackground>
    );
}

export default Modal;
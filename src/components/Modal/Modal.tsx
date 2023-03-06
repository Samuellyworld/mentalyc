// import custom styles
import { ModalBackground, ModalContent,
         CloseButton, ModalHeader, ModalSubContent 
        } from "./Modal.styles";

// import usestate from react module
import { useState } from "react";

// import select from react-select
import Select from 'react-select';

// import props types from types
import { ModalValuesTypes, Props } from "../../types";

// import note types from utils
import { noteTypes } from "../../utils/utils";
import Button from "../Button/Button";

import { dropDownCustomStyles } from "../../utils/utils";

// Modal JSX Component
const Modal : React.FC<Props> = ({onClick}) => {

    // set initial values using set state
    const [values, setValues] : ModalValuesTypes = useState({
        noteType : null,
        clientName : ""
    });


   // handle input change
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setValues({
      ...values,
      [name] : value,
    })
  } 

  console.log(values)
    return (
        <ModalBackground>
            <ModalContent values={values}>
                <CloseButton onClick={onClick}>&times;</CloseButton>
                <ModalHeader>Complete Your Upload</ModalHeader>
                <ModalSubContent>Fill in the details below to complete your upload</ModalSubContent>
                <form>
                    <Select 
                        value={values?.noteType}
                        onChange={(e) => {
                            setValues({
                                ...values,
                                noteType : e,
                              })
                        }}
                        options={noteTypes}
                        styles={dropDownCustomStyles}
                        placeholder="Note Type"
                        />
                    <input 
                      type="text" 
                      name="clientName"
                      placeholder="Enter client name" 
                      onChange={handleChange}
                      />
                    <Button 
                     content={"Finish Upload"}
                     type={false} onClick={''}
                     values={values}
                     />
                </form>
            </ModalContent>
        </ModalBackground>
    );
}

export default Modal;
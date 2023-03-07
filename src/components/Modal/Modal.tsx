// import custom styles
import { ModalBackground, ModalContent,
         CloseButton, ModalHeader, ModalSubContent 
        } from "./Modal.styles";

// import useState from react module
import { useState } from "react";

// import select from react-select
import Select from 'react-select';

// import props types from types
import { ModalValuesTypes, ModalPropsTypes } from "../../types";

// import note types from utils
import { filterLabel, noteTypes } from "../../utils/utils";

// import  component being used
import Button from "../Button/Button";

// custom dropdown styles
import { dropDownCustomStyles } from "../../utils/utils";

// Modal JSX Component
const Modal : React.FC<ModalPropsTypes> = ({onClick, onSubmit}) => {

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

   // handle submit
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)  => {
      e.preventDefault();

      // filter later '-'
    const results = filterLabel(values);

    // new item 
    const newItem = {
       label :  results?.noteType?.label, // note name
       clientName : results?.clientName, // client name
       timer : results?.noteType?.value, // timer in seconds
       progress : 0, // progress bar
       uploadTime : new Date().toISOString(), // the time it was uploaded
       id : Math.random()?.toString(36).substring(2,11) // this generate item
    }

    // submit new item
      onSubmit(newItem);  
 
    // close modal
       onClick()
      
   }

   // Building block
    return (
        <ModalBackground>
            <ModalContent values={values}>
                <CloseButton onClick={onClick}>&times;</CloseButton>
                <ModalHeader>Complete Your Upload</ModalHeader>
                <ModalSubContent>Fill in the details below to complete your upload</ModalSubContent>
                <form onSubmit={handleSubmit}>
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
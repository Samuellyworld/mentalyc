// importing relevant types
import { OptionValueTypes, ValuesObjectTypes } from "../types";

// note types
export const noteTypes : OptionValueTypes[] = [
    {
      label : "Progress note - 80 left",
      value : 60 // 60 seconds
    },
    {
      label : "Soap  note - 70 left",
      value : 180 // 180 seconds
    },
    {
      label : "EMDR note - 20 left",
      value : 70 // 70 seconds
    },
    {
      label : "Couples therapy note - 80 left",
      value : 20 // 20 seconds

    },
    {
      label: "Family therapy note - 50 left",
      value : 40 // 40 seconds
    }
]

// custom styles for select dropdown
export const dropDownCustomStyles = {
    // input styles
    input : (provided: any) => ({
        ...provided,
        fontFamily:   'Montserrat, sans-serif',
        fontSize : "0.9rem",
    }),
    // when a value from the dropdown is populated, the styles
    singleValue: (provided : any) => ({
        ...provided,
        fontFamily: 'Montserrat, sans-serif',
        fontSize : "0.9rem",
      }),
      // the control styles
    control: (provided: any, state: { isFocused: boolean; }) => ({
      ...provided,
      background: '#F2F2F2',
      borderColor: state.isFocused ? 'none' : 'none',
      boxShadow: state.isFocused ? 'none' : 'none',
      '&:hover': { borderColor: state.isFocused ? 'none' : 'none' },
    }),
    // indicator separator styles
    indicatorSeparator: () => ({ display: 'none' }),
    dropdownIndicator: (provided: any, state: { isFocused: boolean; }) => ({
      ...provided,
      color: state.isFocused ? 'black' : '#B2B2B2',
      transform: state.isFocused ? 'rotate(180deg)' : null,
      transition: 'transform 0.2s ease-in-out'
    }),
    // select option styles
    option: (provided: any , state: { isSelected: boolean; }) => ({
      ...provided,
      color: state.isSelected ? '#000' : '#000',
      backgroundColor: state.isSelected ? 'whitesmoke' : '#fff',
      fontFamily: 'Montserrat, sans-serif',
      fontSize : "0.9rem"
    }),
    // placeholder styles 
    placeholder: (provided: any) => ({
      ...provided,
      color: '#B2B2B2',
      fontFamily: 'Montserrat, sans-serif'
    }),
  };


  // filter label '-';
  export const filterLabel = (object : ValuesObjectTypes| any) => {
    const labelParts = object.noteType?.label?.split("-");
    const newLabel = labelParts.shift()?.trim();

    // return new object
    return {
        noteType : {
            label : newLabel,
            value : object.noteType?.value
        },
         clientName : object?.clientName

       }
  }
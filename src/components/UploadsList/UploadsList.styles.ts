// import styled from styled-components
import styled from "styled-components";

// uploads container styles
export const UploadsContainer = styled.div`
    display : flex;
    flex-direction : column;
    padding : 2rem 3.5rem;
`

// uploads header styles
export const UploadsHeader = styled.div`
    display : flex;
    gap : 0.5rem;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    border-radius: 16px;
    padding : 0.2rem 1rem;
    
    span {
        border-radius: 50%;
        width: 2.1rem;
        height: 2.2rem;
        padding: 0.5rem;
        background: #DE0D6F;
        border: 3px solid #DE0D6F;
        font-size: 0.78rem;
        color: white;
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 500;
        text-align: center;
    }
    p {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 500;
    }
`

// notes table container styles
export const NotesTableContainer= styled.div`
       padding : 1rem 0rem;
`

// notes header styles
export const NotesHeader = styled.div`
     display : grid;
     grid-template-columns : 1fr 1fr 1fr;
     padding : 0rem 0.5rem;
     margin: 0rem 0rem 1rem 0rem;

     p {
        font-family: 'Montserrat', "sans-serif";
        font-weight : bold;
        font-size : 0.9rem;
     }
`

// notes styles
export const Notes = styled.div`
      display : grid;
      grid-template-columns : 1fr 1fr 1fr;
      padding : 0.5rem 0.5rem;
      margin : 0.2rem 0rem;
      box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
      border-radius: 8px;

      p {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size : 0.9rem;
      }
`

// progress container styles
export const ProgressContainer = styled.div`
         display : flex;
         align-items : center;
         gap : 7rem;
         img {
            width : 19px;
            cursor : pointer;
         }
`
// progress  bar styles
export const ProgressBar = styled.div`
        width: 12rem;
        height: 19px;
        background-color: #B2B2B2;
        border-radius: 6px;
        overflow: hidden;
`

// bar styles
export const Bar = styled.div`
        width: 0%;
        height: 100%;
        background-color: #3BC171;
        border-radius: 10px;
        transition: width 0.5s ease-in-out;
`
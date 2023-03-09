// import styled from styled-components
import styled from "styled-components";

// uploads container styles
export const UploadsContainer = styled.div`
    display : flex;
    flex-direction : column;
    padding : 2rem 3.5rem;

    @media screen and (max-width : 850px) and (min-width: 500px) {
        padding : 2rem 1.7rem;
    }
    @media screen and (max-width: 500px) {
        padding : 4rem 1rem;
    }
`

// uploads header styles
export const UploadsHeader = styled.div`
    display : flex;
    gap : 0.5rem;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    border-radius: 7px;
    padding : 0.2rem 1rem;

    @media screen and (max-width: 400px) {
        gap: 1rem;
    }
    
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

        @media screen and (max-width : 400px) {
            width: 1.75rem;
            height: 1.75rem;
            padding : 0.28rem 0.5rem;

        }
    }
    p {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 500;

        @media screen and (max-width : 400px) {
            font-weight : 400;
        }
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

     @media screen and (max-width : 650px) {
        grid-template-columns : 0.35fr 0.35fr 0.35fr;
     }

     p {
        font-family: 'Montserrat', "sans-serif";
        font-weight : bold;
        font-size : 0.9rem;
     }
     @media screen and (max-width : 500px) {
        margin: 1rem 0rem 1rem 0rem; 
        p:nth-last-child(2), p:last-child {
            display : none;
          }
     }
    
`

// notes styles
export const Notes = styled.div`
      display : grid;
      grid-template-columns : 1fr 1fr 1fr;
      padding : 0.5rem 0.5rem;
      margin : 0.2rem 0rem;
      box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
      border-radius: 4px;

   
      p {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size : 0.9rem;

        @media screen and (max-width : 600px) {
            font-size : 0.9rem;
        }
      }
      p:nth-last-child(2) {
        @media screen and (max-width : 500px) {
            display: none;
        }
      }


      @media screen and (max-width: 600px) and (min-width: 500px) {
        grid-template-columns : 0.5fr 0.9fr 0.5fr 
      }
      @media screen and (max-width: 500px) {
        grid-template-columns : unset;
        display : flex;
        justify-content : space-between;
        
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

         @media screen and (max-width : 1028px) and (min-width: 600px) {
            gap : 4rem;
         }
         @media screen and (max-width: 600px) and (min-width: 377px) {
            gap: 2rem;
         }
         @media screen and (max-width: 377px) {
            gap: 0.8rem;
         }
`
// progress  bar styles
export const ProgressBar = styled.div`
        width: 12rem;
        height: 19px;
        background-color: #B2B2B2;
        border-radius: 6px;
        overflow: hidden;

        @media screen and (max-width : 850px) {
            width : 9rem;
        }
`

// bar styles
export const Bar = styled.div`
        width: 0%;
        height: 100%;
        background-color: #3BC171;
        border-radius: 10px;
        transition: width 0.5s ease-in-out;
`
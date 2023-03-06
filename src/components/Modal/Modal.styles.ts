// import styled from styled-components
import styled from 'styled-components';

interface Props {
  values : {
    noteType : any,
    clientName : string
  }
}

// modal background styles
export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

// modal content styles
export const ModalContent = styled.div<Props>`
     background-color : white;
     padding : 2rem;
     display flex;
     justify-content : center;
     align-items : center;
     position: relative;
     flex-direction : column;
     border-radius: 0.5rem;

     form {
        display : flex;
        flex-direction: column;
        width : 25rem;
        padding : 1rem 3rem;
        gap: 3rem;
        position : relative;
        align-items : center;
        justify-content : center;

       input {
        background: #F2F2F2;
        padding : 0.5rem 1rem;
        border-radius : 0.5rem;
        font-family: 'Montserrat', "sans-serif";
        font-style: normal;
        width : 100%;
        font-size : 0.9rem;
         }
       .css-b62m3t-container {
        width : 110%;
         }
       .css-1swvg1m-control {
        border-style : none;
         }
       
       button {
         width : 50%;
         background: ${props =>
                    !props.values?.clientName || !props?.values?.noteType 
                    ? "#B2B2B2;" 
                    : "linear-gradient(295.67deg, #DE0D6F 16.23%, #731054 83.77%);"}
          }
 
      }
`

// modal close button styles
export const CloseButton = styled.button`
     border: none;
     font-size: 1.4rem;
     cursor: pointer;
     position: absolute;
     top: 0rem;
     right : 1rem;
`

// modal header styles
export const ModalHeader = styled.p`
     font-family: 'Poppins', "sans-serif";
     font-style: normal;
     font-size: 1rem;

`

// modal sub paragraph styles
export const ModalSubContent = styled.p`
     font-family: 'Montserrat';
     font-style: normal;
     font-weight: 400;
     line-height : 24px;
     font-size: 0.7rem;
     color: #666666;
`
 

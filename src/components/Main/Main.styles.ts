// import styled from styled component
import styled from "styled-components"

export const MainContainer = styled.div`
   display : flex;
   flex-direction : column;
   padding : 2rem 3.5rem;

   h3 {
    font-family : Poppins, "sans-serif";
    font-style: normal;
    font-weight: 900;
    font-size : 1.2rem;
    padding : 0.5rem 0rem;
    line-height: 32px;
    color: #000000;
   }
`

export const IntroContainer = styled.div`
   display : flex;
   flex-direction : row;
   justify-content : space-between;
   width : 100%;

   img {
     width : 1.3rem;
     cursor: pointer;
    }

   p {
     font-family: 'Montserrat', sans-serif;
     font-style: normal;
     font-weight: 500;
    }
`
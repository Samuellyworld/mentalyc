// import styled from styled component
import styled from "styled-components"

export const MainContainer = styled.div`
   display : flex;
   flex-direction : column;
   padding : 2rem 3.5rem;

   @media screen and (max-width : 850px) and (min-width : 500px) {
    padding : 2rem 1.7rem;
   }

   @media screen and (max-width : 500px) {
    padding 2rem 1rem;
   }
   h3 {
    font-family : Poppins, "sans-serif";
    font-style: normal;
    font-weight: 900;
    font-size : 1.2rem;
    padding : 0.5rem 0rem;
    line-height: 32px;
    color: #000000;

    @media screen and (max-width : 500px) and (min-width : 360px) {
        font-weight : 600;
    }
    @media screen and (max-width: 360px) and (min-width : 330px) {
        font-size : 1.1rem;
        font-weight : 400;
    }
    @media screen and (max-width : 330px) and (min-width : 303px) {
        font-size : 1rem;
    }
    @media screen and (max-width: 303px) and (min-width: 280px){
        font-size : 0.9rem;
    }
    @media screen and (max-width : 280px) {
        font-size : 0.8rem;
    }
   }

   button {
    @media screen and (max-width : 500px) {
        margin : 3rem 0rem 0rem ;
    }
    span {
        padding : 0.55rem 0rem;
    }
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


     @media screen and (max-width : 500px) {
        display : none;
     }
    }



   p {
     font-family: 'Montserrat', sans-serif;
     font-style: normal;
     font-weight: 500;
    }
`
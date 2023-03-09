// import styled from styled-components
import styled from "styled-components";

export const NavbarContainer = styled.div`
  display : flex;
  flex-direction : row;
  padding : 1.7rem 0rem 1.7rem 3rem;
  border-bottom: 2px solid #731054;

  @media screen and (max-width : 500px){
    justify-content : center;
    padding : 1rem;
  }
`

export const Logo = styled.img`
    @media screen and (max-width : 500px){
      width : 2.5rem;
    }
`
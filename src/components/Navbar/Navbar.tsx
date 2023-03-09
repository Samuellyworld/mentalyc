// importing relevant styles or modules
import { NavbarContainer, Logo } from "./Navbar.styles";

const Navbar = () => {
    return (
         <>
          <NavbarContainer role="navigation">
           <Logo alt="mentalyc logo" src="/assets/mentalyc.png"/> 
          </NavbarContainer>
         </>
    )
}

export default Navbar;
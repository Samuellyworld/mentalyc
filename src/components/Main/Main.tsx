// importing custom styles
import { IntroContainer, MainContainer } from "./Main.styles";

// import relating component 
import Button from "../Button/Button";

const Main : () => JSX.Element = () => {
    return ( 
         <MainContainer>
           <IntroContainer>
             <p>Hi Maria</p>
             <img src="/assets/help.png" alt="help icon" />
           </IntroContainer>
           <h3> Upload your session&apos;s recordings</h3>
           <Button content={"Upload"}/>
         </MainContainer>   
    );
}

export default Main;
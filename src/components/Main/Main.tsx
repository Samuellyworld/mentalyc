// importing custom styles
import { IntroContainer, MainContainer } from "./Main.styles";

// import relating component 
import Button from "../Button/Button";
import { Props } from "../../types";

// JSX Component
const Main : React.FC<Props> = ({onClick}) => {
    return ( 
         <MainContainer>
           <IntroContainer>
             <p>Hi Maria</p>
             <img src="/assets/help.png" alt="help icon" />
           </IntroContainer>
           <h3> Upload your session&apos;s recordings</h3>
           <Button onClick={onClick} content={"Upload"} type={true}/>
         </MainContainer>   
    );
}

export default Main;
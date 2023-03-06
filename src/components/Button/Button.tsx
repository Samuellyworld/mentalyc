// import custom styles
import { ButtonContainer } from "./Button.styles";

// import props types 
import { ButtonProps } from "../../types";

const Button: React.FC<ButtonProps> = ({content, onClick}) => {
    return (
            <ButtonContainer onClick={onClick}>
              <span>{content}</span>
            </ButtonContainer>
        )
}

export default Button;
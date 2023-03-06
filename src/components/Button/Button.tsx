// import custom styles
import { ButtonContainer } from "./Button.styles";

// import props types 
import { ButtonProps } from "../../types";

// JSX Component
const Button: React.FC<ButtonProps> = ({content, type, onClick}) => {
    return (
            <ButtonContainer onClick={type ? onClick : undefined }>
              <span>{content}</span>
            </ButtonContainer>
        )
}

export default Button;
// import custom styles

import { buttonProps } from "../../types";
import { ButtonContainer } from "./Button.styles";

const Button: React.FC<buttonProps> = ({content}) => {
    return (
            <ButtonContainer>
              <span>{content}</span>
            </ButtonContainer>
        )
}

export default Button;
// import custom styles
import { ButtonContainer } from "./Button.styles";

// import props types 
import { ButtonProps } from "../../types";

// JSX Component
const Button: React.FC<ButtonProps> = ({content, type, onClick, values}) => {
    return (
            <ButtonContainer 
              onClick={type ? onClick : undefined }
              disabled={!type ? !values?.clientName || !values?.noteType : undefined}
              style={{
                cursor : !type ? !values?.clientName || !values?.noteType ? "not-allowed" : "pointer" : "pointer"
              }}
              data-testid="btn"
              role="button"
              >
              <span>{content}</span>
            </ButtonContainer>
        )
}

export default Button;
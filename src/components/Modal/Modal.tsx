// import custom styles
import { ModalBackground, ModalContent,CloseButton } from "./Modal.styles";

// import props typesfrom types
import { ModalProps } from "../../types";

// Modal JSX Component
const Modal : React.FC<ModalProps> = ({onClick}) => {
    return (
        <ModalBackground>
            <ModalContent>
                <CloseButton onClick={onClick}>x</CloseButton>
            </ModalContent>
        </ModalBackground>
    );
}

export default Modal;
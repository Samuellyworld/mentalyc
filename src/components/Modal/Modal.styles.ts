// import styled from styled-components
import styled from 'styled-components';

export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
     background-color : white;
     padding : 20px;
`

export const CloseButton = styled.button`
     position: absolute;
     top: 10px;
     right: 10px;
     background-color: transparent;
     border: none;
     font-size: 24px;
     cursor: pointer;
`

import styled, { keyframes } from "styled-components";

export const BodyFooter = styled.div`
  background-color: #6f5192;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  @media screen and (max-width: 1680px) {
    opacity: ${(props) => (props.isVisible ? "1" : "0")};
    transition: opacity 0.5s ease;
  }

`;

export const ImgArea = styled.div`
  height: 500px;
  width: 200px;
`;

export const BodyImg = styled.img`
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const FooterWrapper = styled.div`
  animation: ${fadeIn} 0.5s ease-in-out;
`;
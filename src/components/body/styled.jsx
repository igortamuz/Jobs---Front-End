import styled from "styled-components";

export const Body = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  box-sizing: border-box;
  position: relative;
`;

export const Content = styled.div`
  background-image: url("https://oamarelinho.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-banner-home.dfb0a848.jpg&w=2048&q=100");
  background-size: cover;
  background-repeat: repeat-y;
  color: black;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 100px;
  box-sizing: border-box;
  filter: sepia(100%) saturate(1.5);
  position: absolute;
  z-index: 1;
`;

export const TitleZone = styled.h2`
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #373f41;
  height: 150px;
  user-select: none;
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
  z-index: 4;
  position: absolute;

  &::before {
    content: "";
    position: absolute;
    bottom: 90px;
    left: 0;
    width: 40px;
    height: 5px;
    background-color: #ffd700;
  }

  @media screen and (max-width: 768px) {
    margin-top: 70px;
  }
`;

export const CardsContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  z-index: 2;
  margin-top: 50px;
  border-radius: 30px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  padding-top: 80px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 1280px) {
    width: 100vw;
    border-radius: 0;
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
    border-radius: 0;
    overflow-x: scroll;
    padding-top: 120px;
    padding-bottom: 80px;
  }
`;

export const CardContainer = styled.div`
  overflow-x: scroll;
  display: flex;
  flex-wrap: nowrap;
  gap: 16px;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
`;

export const NavigationButton = styled.button`
  font-size: 40px;
  border: none;
  background-color: #ffd700;
  border-radius: 100%;
  height: 35px;
  width: 35px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-top: -50px;
  color: #6f5192;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  text-decoration: none;
  user-select: none;
  margin-left: 20px;
  margin-right: 20px;

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

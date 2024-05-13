import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-around;
  background-color: #ffd700;
  width: 100vw;
  height: 102px;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

/* Zona 1 do header
 */

export const HeaderZoneOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
`;

export const PageTittle = styled.h1`
  color: black;
  font-family: LarkenBlack;
  font-size: 28px;
  user-select: none;
  cursor: pointer;
`;

export const Point = styled.h2`
  color: black;
  font-family: LarkenBlack;
  font-size: 28px;
  position: absolute;
  top: 21px;
  right: 51px;
  user-select: none;
  cursor: pointer;
`;

/* Zona 2 do header
 */

export const HeaderZoneTwo = styled.div`
  width: 40%;

  @media screen and (max-width: 768px) {
    display: grid;
    align-self: center;
    justify-items: center;
    position: absolute;
    top: 100px;
    left: 5%;
    width: 90%;
  }

  z-index: 3;
`;

export const IconArea = styled.div`
  display: flex;
`;

export const IconImg = styled.img`
  margin-left: 10px;
  margin-right: 10px;
`;

export const SearchArea = styled.div`
  background-color: white;
  width: 90%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 5px;
  padding-left: 10px;
  box-shadow: 0px 5px 10px rgba(39, 39, 39, 0.514);
  z-index: 3;
  user-select: none;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 70%;
  border: none;
  outline: none;
  ::placeholder {
    color: #b9bcbd;
  }

  font-size: 16px;
  font-family: olivetta;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;

  &::before {
    content: "";
    border-left: 1px solid #ebeff7;
    height: 50px;
  }
`;

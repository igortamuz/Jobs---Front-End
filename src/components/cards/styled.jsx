import styled from "styled-components";

export const NoJobsMessage = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 12px;
  font-style: italic;
  margin-top: 50px;
  margin: 20px;
`;
export const CardsZone = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-auto-flow: column;
  gap: 20px;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1000px;
  height: auto;

  @media screen and (max-width: 1366px) {
    grid-template-columns: repeat(4, 270px);
  }

  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(4, 250px);
  }

  @media screen and (max-width: 1152px) {
    grid-template-columns: repeat(4, 200px);
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(4, 150px);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 280px);
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: 300px;
  }
`;

export const CardBody = styled.div`
  background-color: #ffffff;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  cursor: pointer;
  font-family: Noyh;
  transition: transform 0.2s ease-in-out;
  flex-grow: 1;

  &:hover {
    transform: translateY(-10px);
    & > div > svg {
      color: #6f5192;
    }
  }
`;


export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
  width: 200px;
`;

export const TitleText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${CardBody}:hover & {
    color: #6f5192;
  }
`;

export const Description = styled.div`
  font-size: 16px;
  color: #666666;
  margin-bottom: 20px;
`;

export const DescriptionText = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

export const CompanyName = styled.div`
  font-size: 15px;
  color: #999999;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;

export const CompanyNameText = styled.div`
  margin-left: 5px;
`;

export const CityName = styled.div`
  font-size: 13px;
  color: #999999;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const CityNameText = styled.div`
  margin-left: 5px;
`;

export const StateName = styled.div`
  font-size: 12px;
  color: #999999;
  display: flex;
  align-items: center;
`;

export const StateNameText = styled.div`
  margin-left: 5px;
`;

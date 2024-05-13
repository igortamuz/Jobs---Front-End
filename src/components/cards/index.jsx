import {
  CardsZone,
  CardBody,
  CardsContainer,
  Title,
  TitleText,
  CityName,
  CityNameText,
  StateName,
  StateNameText,
  Description,
  DescriptionText,
  CompanyName,
  CompanyNameText,
  NoJobsMessage,
} from "./styled";
import { FaMapMarkerAlt, FaBuilding } from "react-icons/fa";

export default function Cards({ jobs }) {
  return (
    <CardsZone>
      {jobs.length > 0 ? (
        <CardsContainer>
          {jobs.map((job) => (
            <CardBody key={job.id}>
              <Title>
                <TitleText>{job.title}</TitleText>
              </Title>
              <Description>
                <DescriptionText>{job.description}</DescriptionText>
              </Description>
              <CompanyName>
                <FaBuilding />
                <CompanyNameText>{job.companyName}</CompanyNameText>
              </CompanyName>
              <CityName>
                <FaMapMarkerAlt />
                <CityNameText>{job.cityName}</CityNameText>
              </CityName>
              <StateName>
                <FaMapMarkerAlt />
                <StateNameText>{job.stateName}</StateNameText>
              </StateName>
            </CardBody>
          ))}
        </CardsContainer>
      ) : (
        <NoJobsMessage>
          Não há vagas para esta busca no momento :( !
        </NoJobsMessage>
      )}
    </CardsZone>
  );
}

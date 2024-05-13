import React, { useRef, useState, useEffect } from "react";
import Cards from "../cards/index";
import {
  Body,
  CardsContainerWrapper,
  NavigationButton,
  Content,
  CardContainer,
  TitleZone,
} from "./styled";



export default function BodyArea({ jobs }) {
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [currentPage, setCurrentPage] = useState(0);
  const cardContainerRef = useRef(null);

  useEffect(() => {
    const sortedJobs = jobs.sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
    setFilteredJobs(sortedJobs);
    setCurrentPage(0);
  
    const container = cardContainerRef.current;
    const containerWidth = container.offsetWidth;
  
    const handleScroll = () => {
      const scrollPosition = container.scrollLeft;
      const page = Math.floor(scrollPosition / containerWidth);
      setCurrentPage(page);
    };
  
    container.addEventListener("scroll", handleScroll);
  
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [jobs]);

  const handleNavigationClick = (direction) => {
    const container = cardContainerRef.current;
    const containerWidth = container.offsetWidth;
    const scrollWidth = container.scrollWidth;
    const scrollPosition = container.scrollLeft;

    if (direction === "left" && scrollPosition > 0) {
      container.scrollLeft -= containerWidth;
      setCurrentPage(currentPage - 1);
    } else if (direction === "right" && scrollPosition < scrollWidth) {
      container.scrollLeft += containerWidth;
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Body>
      <Content />
      <TitleZone>{"Vagas em Destaque"}</TitleZone>
      <CardsContainerWrapper>
        <NavigationButton 
        onClick={() => handleNavigationClick("left")}
        style={{ display: filteredJobs.length <= 8 ? 'none' : 'flex' }}
        >
          {"<"}
        </NavigationButton>
        <CardContainer ref={cardContainerRef}>
          <Cards jobs={filteredJobs} />
        </CardContainer>
        <NavigationButton 
        onClick={() => handleNavigationClick("right")}
        style={{ display: filteredJobs.length <= 8 ? 'none' : 'flex' }}
        >
          {">"}
        </NavigationButton>
      </CardsContainerWrapper>
    </Body>
  );
}

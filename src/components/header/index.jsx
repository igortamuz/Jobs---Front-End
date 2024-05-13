import { useState } from "react";
import {
  Header,
  HeaderZoneOne,
  HeaderZoneTwo,
  PageTittle,
  Point,
  SearchArea,
  SearchInput,
  IconArea,
  Divider,
  IconImg,
} from "./styled";

export default function HeaderComponent({ onSearch }) {
  const [nameInput, setNameInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [stateInput, setStateInput] = useState("");

  const handleNameInputChange = (event) => {
    const value = event.target.value;
    setNameInput(value);
    onSearch(value, cityInput, stateInput);
  };
  
  const handleCityInputChange = (event) => {
    const value = event.target.value;
    setCityInput(value);
    onSearch(nameInput, value, stateInput);
  };
  
  const handleStateInputChange = (event) => {
    const value = event.target.value;
    setStateInput(value);
    onSearch(nameInput, cityInput, value);
  };
  
  

  return (
    <>
      <Header>
        <HeaderZoneOne>
          <PageTittle>{"Find Jobs"}</PageTittle>
          <Point>{"."}</Point> 
        </HeaderZoneOne>

        <HeaderZoneTwo>
          <SearchArea>
            <>
              <IconArea>
                <IconImg src="https://oamarelinho.com.br/_next/static/media/ico-search.3822e5d4.svg" />
              </IconArea>
              <SearchInput
                value={nameInput}
                onChange={handleNameInputChange}
                placeholder="Digite aqui a vaga que você procura!"
              />
            </>
            <Divider />
            <>
              <IconArea>
                <IconImg src="https://oamarelinho.com.br/_next/static/media/ico-map-pin.943ecfe2.svg" />
              </IconArea>
              <SearchInput
                value={cityInput}
                onChange={handleCityInputChange}
                placeholder="Digite a cidade da vaga!"
              />
            </>
            <Divider />
            <>
              <IconArea>
                <IconImg src="https://oamarelinho.com.br/_next/static/media/ico-map-pin.943ecfe2.svg" />
              </IconArea>
              <SearchInput
                value={stateInput}
                onChange={handleStateInputChange}
                placeholder="Digite a cidade da vaga!"
              />
            </>
          </SearchArea>
        </HeaderZoneTwo>
      </Header>
    </>
  );
}


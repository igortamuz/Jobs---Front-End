import { useState, useEffect } from "react";
import { BodyFooter, BodyImg, ImgArea, FooterWrapper } from "./styled";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >= //Identificar a posição da pag para tornar invisivel(ou visivel) o footer
        document.documentElement.scrollHeight;
      setIsVisible(bottom);
    };

    window.addEventListener("scroll", handleScroll); //Acionar
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <FooterWrapper>
      <BodyFooter isVisible={isVisible}>
        <ImgArea>
          <BodyImg src="https://oamarelinho.com.br/_next/static/media/flamboyantgroup_final.b63b5715.svg" />
        </ImgArea>
      </BodyFooter>
    </FooterWrapper>
  );
}

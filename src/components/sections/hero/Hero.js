import React from "react";
import Header from "../../header/Header";
import { StyledHero } from "./StyledHero";
import HeroContent from "../../heroContent/HeroContent";
const Hero = () => {
  return (
    <StyledHero>
      <Header />
      <HeroContent />
    </StyledHero>
  );
};

export default Hero;

import React from "react";
import Header from "../../header/Header";
import { StyledHero } from "./StyledHero";
import HeroContent from "../../heroContent/HeroContent";
import { WaveBottom } from "../../waves";
const Hero = () => {
  return (
    <StyledHero className="hero">
      <Header />
      <HeroContent />
      <WaveBottom />
    </StyledHero>
  );
};

export default Hero;

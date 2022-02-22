import React from "react";
import { StyledButton } from "../button/StyledButton";
import { StyledHeroContent } from "./StyledHeroContent";

const HeroContent = () => {
  return (
    <StyledHeroContent>
      <div className="hero__body fadeInRight">
        <h1 className="hero__body__headline mg-bottom-md">
          Build The Community Your Fans Will Love
        </h1>
        <p className="hero__body__subhead mg-bottom-md">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.{" "}
        </p>
        <StyledButton pink>Get Started For Free</StyledButton>
      </div>
      <div className="hero__image animate__animated animate__fadeInUp">
        <img src="./images/illustration-mockups.svg" alt="" />
      </div>
    </StyledHeroContent>
  );
};

export default HeroContent;

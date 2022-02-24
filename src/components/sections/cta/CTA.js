import React from "react";
import { StyledCTA } from "./StyledCTA";
import { StyledButton } from "../../button/StyledButton";
// import CTAWaveBottom from "../../waves/CTAWaveBottom";
// import WaveBottom from "../../waves/WaveBottom";
import { WaveTop, WaveBottom } from "../../waves";

const CTA = () => {
  return (
    <StyledCTA className="cta">
      <div className="cta__text-wrapper">
        <h2 className="cta__heading">Ready To Build Your Community?</h2>
        <StyledButton pink>Get Started For Free</StyledButton>
      </div>
      <WaveBottom />
    </StyledCTA>
  );
};

export default CTA;

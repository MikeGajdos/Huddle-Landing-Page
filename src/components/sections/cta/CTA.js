import React from "react";
import { StyledCTA } from "./StyledCTA";
import { StyledButton } from "../../button/StyledButton";

const CTA = () => {
  return (
    <StyledCTA className="cta">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="cta__wave-top"
      >
        <path
          fill="hsl(212, 100%, 97%)"
          //   fill-opacity="1"
          d="M0,288L34.3,272C68.6,256,137,224,206,229.3C274.3,235,343,277,411,256C480,235,549,149,617,144C685.7,139,754,213,823,240C891.4,267,960,245,1029,229.3C1097.1,213,1166,203,1234,218.7C1302.9,235,1371,277,1406,298.7L1440,320L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>

      <div className="cta__text-wrapper">
        <h2 className="cta__heading">Ready To Build Your Community?</h2>
        <StyledButton pink>Get Started For Free</StyledButton>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="cta__wave-bottom waveAnimation2"
      >
        <path
          fill="hsl(192, 100%, 9%)"
          //   fill-opacity="1"
          d="M0,128L34.3,112C68.6,96,137,64,206,90.7C274.3,117,343,203,411,202.7C480,203,549,117,617,122.7C685.7,128,754,224,823,240C891.4,256,960,192,1029,154.7C1097.1,117,1166,107,1234,122.7C1302.9,139,1371,181,1406,202.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </StyledCTA>
  );
};

export default CTA;

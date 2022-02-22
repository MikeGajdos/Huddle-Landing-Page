import { css, keyframes } from "styled-components";

const fadeInRight = keyframes`
from {
    opacity: 0;
    transform : translateX(-100%)
}
to {
    opacity: 1;
    transform: translateX(0px)
}
`;

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform : translateY(-100%)
  }
  to {
    opacity: 1;
    transform: translateY(0)
  }
  `;

const waveAnimation2 = keyframes`
    0% {
        transform: translateX(-50%)
    }

    50% {
        transform: translateX(0%)
    }

    100% {
        transform: translateX(-50%)
    }
    `;

export const animations = css`
  .fadeInRight {
    animation: ${fadeInRight} 2s linear;
    animation-delay: 2s;
    animation-fill-mode: backwards;
  }

  .fadeInDown {
    animation: ${fadeInDown} 2s ease-in-out;
    animation-fill-mode: backwards;
  }

  .waveAnimation2 {
    animation: ${waveAnimation2} 35s linear infinite;
  }
`;

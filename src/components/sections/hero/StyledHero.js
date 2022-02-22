import styled from "styled-components";

export const StyledHero = styled.div`
  padding: 6rem 8rem;
  background: url("/images/bg-hero.svg"), rgb(237, 251, 254);
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: 500px) {
    padding: 4rem;
  }

  @media only screen and (min-width: 1800px) {
    padding: 8rem 10rem;
  }
`;

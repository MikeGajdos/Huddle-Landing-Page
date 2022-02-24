import styled from "styled-components";

export const StyledHeroContent = styled.section`
  display: flex;
  min-height: 80vh;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }

  .hero__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 45%;
    padding-right: 8rem;

    @media only screen and (max-width: 800px) {
      align-items: center;
      width: 100%;
      margin-bottom: 8rem;
      padding-right: 0;
    }
  }

  .hero__image {
    display: flex;
    align-items: center;
    width: 55%;
    overflow: hidden;

    @media only screen and (min-width: 1800px) {
      justify-content: center;
    }

    @media only screen and (max-width: 800px) {
      width: 100%;
    }

    svg {
      height: auto;
      width: 100%;
      max-width: 120rem;
    }
  }
`;

import styled from "styled-components";

export const StyledCTA = styled.section`
  .cta__text-wrapper {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 4.5rem;

    & > * {
      align-self: center;
    }
  }

  .cta__heading {
    font-size: clamp(3rem, 2vw, 5rem);
    font-weight: bold;
    text-align: center;
  }

  .cta__wave-bottom {
    display: block;
    width: 2768px;
    height: 20rem;
  }

  .cta__wave-top {
    display: block;
    width: 2768px;
    height: 20rem;
  }
`;

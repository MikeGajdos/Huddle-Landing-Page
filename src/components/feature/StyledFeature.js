import styled from "styled-components";

export const StyledFeature = styled.article`
  display: flex;
  flex-direction: ${({ layout }) => layout || "row"};
  align-items: center;
  width: 75%;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    text-align: center;
  }

  & > * {
    flex: 1;
  }

  img {
    width: 75%;
  }

  .feature__heading {
    font-size: clamp(3rem, 2.5vw, 5.5rem);
    font-weight: 500;
    margin-bottom: 2rem;
  }

  .feature__subheading {
    color: var(--color-greyish-blue);
    font-size: 2rem;
    font-size: clamp(1.75rem, 1.15vw, 2.75rem);
  }

  .feature__image {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

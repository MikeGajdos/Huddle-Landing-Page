import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  border: none;
  border-radius: 100px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.1s;
  outline: none;

  &:hover {
    transform: scale(0.95);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  }

  ${(props) =>
    props.white
      ? css` width: 20rem;
        padding: 1rem;
        background-color: white;
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        font-weight: 500;

        @media only screen and (max-width: 1000px) {
            width: 18rem;
            padding: 1rem;
            font-size: 1.75rem;
        }

        @media only screen and (max-width: 500px) {
            width: 14rem;
            padding: 1rem;
            font-size: 1.5rem;
        }

        &:hover {
            background-color: hsl(0, 0%, 97%);
        `
      : ""}
  ${(props) =>
    props.pink
      ? css`
          width: 32rem;
          padding: 2rem;
          background-color: var(--color-pink);
          color: white;
          font-family: "Poppins", sans-serif;
          font-size: 2rem;
          font-weight: 500;

          @media only screen and (max-width: 1000px) {
            width: 28rem;
            padding: 1.75rem;
            font-size: 1.75rem;
          }

          &:hover {
            background-color: hsla(322, 100%, 66%, 0.808);
          }
        `
      : ""}

${(props) =>
    props.subscribe
      ? css`
          padding: 1.5rem 3.5rem;
          background-color: var(--color-pink);
          color: white;
          font-family: "Poppins", sans-serif;
          font-size: 1.75rem;
          font-weight: 500;
          border-radius: 4px;

          @media only screen and (max-width: 1000px) {
            padding: 1.75rem;
            font-size: 1.75rem;
          }

          &:hover {
            background-color: hsla(322, 100%, 66%, 0.808);
          }
        `
      : ""}
`;

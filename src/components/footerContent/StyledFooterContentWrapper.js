import styled from "styled-components";

export const StyledFooterContentWrapper = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-areas:
      "top1 top2"
      "bottom1 bottom1";
    grid-gap: 1.5rem;
  }

  width: 80%;
  max-width: 1440px;
  margin: 0 auto;
  padding-bottom: 4rem;

  & > * {
    margin-bottom: 1.5rem;
  }

  p {
    line-height: 1.5;
  }

  .footer__info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    grid-area: top1;
  }

  .phoneNumber,
  .emailAddress {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .footer__newsletter {
    grid-area: top2;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    h5 {
      font-size: 2.75rem;
    }
  }

  .footer__newsletter__form {
    display: flex;

    align-items: center;
  }

  input {
    flex-grow: 1;
    height: 5rem;
    margin-right: 1.5rem;
    border: none;
    border-radius: 4px;
    color: gray;
    font-size: 2rem;
  }

  .footer__social-icons {
    display: flex;
    gap: 1.5rem;
    grid-area: bottom1;
  }
`;

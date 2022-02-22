import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 6rem;
  overflow: hidden;

  @media only screen and (max-width: 800px) {
    margin-bottom: 10rem;
  }

  @media only screen and (min-width: 1800px) {
    margin-bottom: 14rem;
  }
  .header-logo {
    margin-right: auto;

    svg {
      /* height: 2.25vw;
      min-height: 1.75rem;
      width: auto; */
    }
  }
`;

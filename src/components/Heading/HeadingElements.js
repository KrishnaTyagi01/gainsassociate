import styled from "styled-components";

export const HeadingH1 = styled.h1`
  font-weight: bold;
  font-size: 4rem;
  font-family: "Inter", sans-serif;
  color: rgba(216, 216, 216, 1);

  @media screen and (max-width: 460px) {
    text-shadow: 5px 5px 5px black;
    font-size: calc(2vmax + 1.5rem);
  }
`;

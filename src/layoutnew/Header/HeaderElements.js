import styled from "styled-components";

export const HeaderGroup = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
export const NavMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 950px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 950px) {
    display: none;
    flex-direction: column;
    gap: 0rem;
  }
`;

export const ButtonCollapse = styled.button`
  unset: all;
  background: transparent;
  border: none;
  display: none;

  @media screen and (max-width: 950px) {
    display: block;
  }
`;
import styled from "styled-components";

export const HeaderGroup = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding-top:1.5rem;
  padding-bottom:1rem;
    max-width: 1370px;
    margin-left: auto;
    margin-right: auto;
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

export const Img = styled.img`
`;
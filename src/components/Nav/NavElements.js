import styled from "styled-components";

export const MenuGroup = styled.ul`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media screen and (max-width: 950px) {
    display: none;
    flex-direction: column;
    gap: 0;
  }
`;
export const MenuItem = styled.li`
  margin: 10px 0;
  display: block;
  padding: ${(props) => (props.primary ? "0" : "0.75rem")} 1rem;
  ${(props) => props.primary && "font-family: 'Inter';"}
  font-size: ${(props) => (props.primary ? "30px" : "1.1rem")};
  ${(props) => props.primary && "font-weight: 700"}
`;

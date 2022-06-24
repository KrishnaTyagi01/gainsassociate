import styled from "styled-components";

export const ButtonElement = styled.button`
  padding: 0.65rem 1.5rem;
  margin: 10px 0;
  border: 1px solid #4d92d5;
  border-left-width: 2.5px;
  border-right-width: 2.5px;
  border-radius: 40px;
  background: ${({ btnType }) => (btnType ? "#1e90fe" : "transparent")};
  cursor: pointer;
  ${(props) =>
    props.primary &&
    "font-family: 'Inter'; font-weight: 700; padding: 0 1.5rem;"}
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${({ btnType }) => (btnType ? "#64a5e3" : "#4d92d5")};
  }
`;

export const ButtonLabel = styled.div`
  color: #fff;
  cursor: pointer;
  font-size: ${(props) => (props.primary ? "30px" : "1rem")};
`;

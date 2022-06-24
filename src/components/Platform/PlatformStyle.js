import { Button } from "react-bootstrap";
import styled from "styled-components";

export const PlatformInfo = styled.div``;

export const StyledButton = styled(Button)`
  top: ${(props) => (props.top ? props.top : "200px")};
  left: 150px;
  z-index: 100;
  &:focus {
    box-shadow: none;
  }

  @media screen and (max-width: 1200px) {
    left: 90px;
  }
`;

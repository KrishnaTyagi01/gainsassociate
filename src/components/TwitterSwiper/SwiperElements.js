import styled from "styled-components";
import { Button } from "react-bootstrap";

export const ButtonStyled = styled(Button)`
  &:focus {
    box-shadow: none;
  }
`;

export const SwiperButtonContainer = styled.div`
  margin-top: 45px;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

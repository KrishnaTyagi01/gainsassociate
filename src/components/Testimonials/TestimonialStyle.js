import { Button } from "react-bootstrap";
import styled from "styled-components";

export const ProfileImg = styled.div``;

export const TestimonialCard = styled.div`
  width: 90%;
  @media screen and (max-width: 764px) {
    width: 100%;
  }
`;

export const ProfileName = styled.div``;

export const ProfileInfo = styled.div``;

export const StyledButton = styled(Button)`
  &:focus {
    box-shadow: none;
  }
`;

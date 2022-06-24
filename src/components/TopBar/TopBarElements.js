import styled from "styled-components";
import { Container } from "../../theme/GlobaleStyles";

export const TopBarContainer = styled( Container )`
  border-radius: 50rem;
  background: rgba(72, 60, 151, 0.6);
  padding: 0.5rem 2rem;
  justify-content: space-around;
  font-size: 14px;
  max-width: 1200px;
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const DataItem = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  border-right: 1px solid gray;

  @media screen and (max-width: 630px) {
    border: none;
  }
`;

export const DataLabel = styled.div`
  white-space: nowrap;
`;

export const DataValue = styled.div`
  color:#78bdff;
  font-weight: 600;
  white-space: nowrap;
  margin-left:0.15rem
`;

export const DesktopContainer = styled.div`
  @media screen and (max-width: 1104px) {
    overflow-x: scroll;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

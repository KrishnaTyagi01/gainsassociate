import styled from "styled-components";

export const AboutDetails = styled.div`
  width: 100%;
  max-width: 1400px;
  ${( props ) => ( props.containerId === "platform" ? "" : "padding-top: 3rem;" )}
  margin: 0 auto;
  text-align: center;
`;

export const AboutHeader = styled.h2`
  padding: 1vmax 0;
  color: white;
`;

export const AboutDescription = styled.p`
  max-width: 830px;
  line-height: 30px;
  padding-bottom: 2vmax;
`;

export const AboutTerms = styled.p`
  max-width: 930px;
  font-size: 14px;
`;

export const AboutInfo = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;
  min-height: 380px;
`;

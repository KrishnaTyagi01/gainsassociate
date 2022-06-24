import styled from "styled-components";
import { FullContainer } from "../theme/GlobaleStyles";

export const ContainerFull = styled( FullContainer )``;

export const HeroBg = styled.div`
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  z-index: -1;
 
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  min-height: 1105px;
  -o-object-fit: cover;
  object-fit: cover;
   @media(max-width:768px){
     min-height: 1200px;
   }
`;

export const BackgroundImage = styled.div`
  ${( props ) =>
    props.removeBoxShadow
      ? ""
      : "box-shadow: 0px -36px 48px 0px rgba(0, 0, 0, 1); -webkit-box-shadow: 0px -36px 48px 0px rgba(0, 0, 0, 1); -moz-box-shadow: 0px -36px 48px 0px rgba(0, 0, 0, 1);"}
  background-image: url(${( props ) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
      background-position: center;
  ${( props ) =>
    props.heroPosition &&
    "background-position: 0% 0%; background-size: auto 100%;"}
  width: 100%;
  height: 100%;
  ${( props ) => ( props.platform ? "" : "min-height: 1050px;" )}
  -o-object-fit: cover;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    // background-size: auto 103%;               Unnecessary code
  }
  &.background-image{
    
    ${( props ) =>
    props.heroPosition &&
    "background-position: 0% 0%; background-size: auto 100%;"}

    @media screen and (max-width: 768px) {
    // background-size: auto 80%;
    background-position: 40% center;
    }
    @media (max-width:850px) {
        min-height: 1700px;
        background-size: cover;
        background-position: 0% 0%;
    }
    @media (max-width:425px) {
        min-height: 1515px;
        background-size: auto 100%;
        background-position: 40% center;
    }
`;

export const Caption = styled.div`
  width: 47%;
  // padding-top: 6rem;
  // h1 {
  //   text-transform: lowercase;
  // }
  @media screen and (max-width: 422px) {
    padding: 25px;
  }

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 473px;

  @media screen and (max-width: 978px) {
    flex-direction: column;
    align-items: center;
    margin: 10px auto;
    max-width: 240px;
    min-height: 100px;
  }
  
`;

export const ContainerSection = styled.div`
  height: 100%;
  // min-height: 1654px;
  // margin-top: 80px;
`;

export const Twitter = styled.div``;

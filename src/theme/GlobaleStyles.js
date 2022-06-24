import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  // max-width: 1400px;
  // margin: 0 3rem;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const ContainerHead = styled.div`
  height: 100%
  width: 100%;
  display: flex;
  flex-direction: column;
    max-width: 1370px;
    margin-left: auto;
    margin-right: auto;

  @media screen and (max-width: 768px) {
    padding-left: 0;
  }

  @media screen and (max-width: 420px) {
      min-height: 200px;
    }
`;

export const FullContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

const GlobaleStyles = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    color:#fff;
    // font-family: 'Roboto', Tahoma, Geneva, Verdana, sans-serif;
    font-family: 'inter', 'Roboto', Tahoma, Geneva, Verdana, sans-serif;
  }
  *{
    box-sizing:border-box;
  }
  h1,h2,h3,h4,h5,h6,p{
    margin: 0;
    padding:0;
  }
  a{
    color:#fff;
    text-decoration:none;
    &:hover{
      color:#fff
    }
  }

  ul{
    list-style:none;
    padding:0;
    margin:0;
  }
  .footer{
    .col-heading{
         font-size: 18px;
    font-weight: bold;
    }
  }
`;

export const CardImg = styled.img`
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    max-height: 240px;
  }
`;

export const CardImgForBestDeals = styled.img`
  border-radius: 5px;

  // @media screen and (max-width: 768px) {
  //   max-height: 240px;
  // }
`;

export default GlobaleStyles;

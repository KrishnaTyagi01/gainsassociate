import styled from "styled-components";

export const TwitterCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 180px;
  height: 100%;
  border-right: 2px solid #939395;
  padding-right: 15px;
  padding-left: 5px;

  @media screen and (min-width: 1490px) {
    margin-top: 145px;
  }

  @media screen and (max-width: 460px) {
    border-left: 2px solid #939395;
    border-right: none;
    padding-left: 15px; 
    padding-right: 5px;
    margin-top: 0px;
  }
`;

export const TweetLink = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;
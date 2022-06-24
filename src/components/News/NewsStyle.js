import styled from "styled-components";

export const RecentPosts = styled.div``;

export const Posts = styled.div``;

export const BlueContainer = styled.div`
  background-color: #213eca;
  border-radius: 5px;
  width: 100%;
  max-width: 263px;
  ${(props) =>
    props.recentPosts && "height: 100%; min-height: 280px; text-align: left;"}
  @media screen and (max-width: 576px) {
    background-color: transparent;
    max-width: 100%;
  }
`;

export const InputField = styled.input`
  border-radius: 5px;
  border: none;
  padding: 2px 5px;
  background-color: #150f35;
  opacity: 30%;
  outline: none;
  color: white;
  width: 100%;
  max-width: 193px;
`;

export const Ul = styled.ul`
  list-style-type: disc;
`;

import React from "react";
import styled from "styled-components";
import Search from "../img/search.png";
const Container = styled.div`
  width: 100px;
  height: 100px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.75);
  @media only screen and (max-width: 480px) {
    width: 50px;
  }
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
`;
const Text = styled.span`
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
`;

export const MiniCard = () => {
  return (
    <Container>
      <Image src={Search} />
      <Text>The standard Lorem Ipsum passage, used since the 1500s</Text>
    </Container>
  );
};

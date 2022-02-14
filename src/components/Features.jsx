import React from "react";
import styled from "styled-components";

import App from "../img/app.png";
import { AnimatedShapes } from "./AnimatedShapes";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 20px;
  }
`;
const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 80%;
  height: 100%;
`;

const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: gray;
`;
const Description = styled.span`
  font-size: 20px;
  color: gray;
  margin-top: 20px;
`;
const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: blue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
`;

export const Features = () => {
  return (
    <Container>
      <Left>
        {/* <Image src={Phone}></Image> */}
        <Image src={App}></Image>
      </Left>
      <Right>
        <Title>
          <b>Good Design</b>
          <br />
          <b>Good Business</b>
        </Title>
        <SubTitle>We know that good design matters</SubTitle>
        <Description>
          We are happy to help clients and take clients to future
        </Description>
        <Description>We care your business! </Description>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

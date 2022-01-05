import React from "react";
import styled from "styled-components";
import Woman from "../img/woman.png";
import { AnimatedShapes } from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh-50px);
  display: flex;
  padding: 20px;
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
width: 60%;
    font-size: 6;0px;
`;

const Description = styled.p`
  font-size: 20px;
  width: 60%;
  margin-top: 20px;
`;

const Info = styled.div`
  margin-top: 50px;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;
const Phone = styled.span`
  color: red;
  font-weight: bold;
`;
const ContactText = styled.div`
  color: gray;
  margin-top: 5px;
`;

const Right = styled.div`
  width: 40%;
`;
const Image = styled.img`
  width: 100%;
`;
export const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in Development</Title>
        <Description>
          {" "}
          I believe that designing and developing is a passion!
        </Description>
        <Info>
          <Button>Learn More</Button>
          <Contact>
            <Phone>Call Us:(123) 123 12 12</Phone>
            <ContactText>For any questions</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={Woman}></Image>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

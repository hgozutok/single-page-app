import React from "react";
import styled from "styled-components";
import How from "../img/how.png";
import { MiniCard } from "./MiniCard";
import Play from "../img/play.png";

const Container = styled.div`
  display: flex;
  height: 100vh;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Image = styled.img`
  display: ${(props) => props.open && "none"};
  width: 80%;
  margin-left: 100px;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    padding: 20px;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: gray;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Button = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  background-color: blue;
  font-weight: bold;
  color: white;
  padding: 10px;
  margin-top: 50px;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 40px;
`;
export const Services = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Container>
      <Left>
        <Image open={open} src={How} />
      </Left>
      <Right>
        <Title>Simple to start with us</Title>
        <Desc>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </Desc>
        <CardContainer>
          <MiniCard />
          <MiniCard />
          <MiniCard />
        </CardContainer>
        <Button onClick={() => setOpen(!open)}>
          <Icon src={Play} /> Learn More
        </Button>
      </Right>
    </Container>
  );
};

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-right: 5px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.75);
  @media only screen and (max-width: 480px) {
    margin-right: 0px;
    margin-bottom: 20px;
    padding: 10px;
  }
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Price = styled.span`
  font-weight: bold;
  font-size: 50px;
  @media only screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
const Type = styled.button`
  padding: 10px;
  margin: 10px 0px;
  border: 1.5px solid crimson;
  color: crimson;
  border-radius: 20px;
  background-color: white;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const List = styled.ul`
  list-style: none;
`;
const ListItem = styled.li`
  margin: 30px 0px;
  @media only screen and (max-width: 480px) {
    margin: 10px 0px;
    font-size: 12px;
  }
`;
const Button = styled.button`
  border: none;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  @media only screen and (max-width: 480px) {
    font-size: 12px;
    padding: 5px;
  }
`;

export const PriceCard = (props) => {
  return (
    <Container>
      <PriceContainer>
        $<Price>{props.price}</Price>/ month
      </PriceContainer>
      <Type>{props.type} Plan</Type>
      <List>
        <ListItem>Free Support</ListItem>
        <ListItem>PremiumPlugin</ListItem>
        <ListItem>150 Free Templete</ListItem>
        <ListItem>And More</ListItem>
      </List>
      <Button>Get Started</Button>
    </Container>
  );
};

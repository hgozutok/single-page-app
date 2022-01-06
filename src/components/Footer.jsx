import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 10%;
  background-color: black;
  color: crimson; ;
`;
const Wrapper = styled.div`
  padding: 20px;
  justify-content: space-between;
  display: flex;
`;
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;
const ListItem = styled.li`
  margin-right: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #gray;
`;
const Logo = styled.h3`
  padding: 0;
  margin: 0;
  font-weight: bold;
  text-decoration: crimson;
  align-self: center;
  display: flex;
  justify-content: center;
`;

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>About</ListItem>
        </List>
        <Logo>HugoDev</Logo>
      </Wrapper>{" "}
    </Container>
  );
};

import React from "react";
import styled from "styled-components";
import { PriceCard } from "./PriceCard";

const Container = styled.div`
  align-items: center;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Price = () => {
  return (
    <Container>
      <PriceCard price="10" type="basic" />
      <PriceCard price="20" type="premium" />
      <PriceCard price="30" type="advanced" />
    </Container>
  );
};

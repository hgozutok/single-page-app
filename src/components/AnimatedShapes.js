import React from "react";
import styled from "styled-components";

const Square = styled.div`
  width: 60px;
  height: 60px;
  background-color: #69fa8d;
  opacity: 0.7;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: -1;

  animation: square 25s linear alternate infinite;
  
  @keyframes square {
      to {
          transform: translate(100vW, 100vh) ;
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  background-radius: 50%;
  background-color: #f2799d;
  opacity: 0.7;
  position: absolute;
  top: 200px;
  left: -60px;
  z-index: -1;

  animation: circle 25s linear alternate infinite;
  
  @keyframes circle {
      to {
          transform: translate(100vW, -100vh) ;
`;

const Rectangle = styled.div`
  width: 50px;
  height: 100px;
  background-color: #70a9cc;
  opacity: 0.5;
  position: absolute;
  top: 400px;
  left: -50px;
  z-index: -1;

  animation: rectangle 25s linear alternate infinite;
  
  @keyframes rectangle {
      to {
          transform: translate(100vW, -50vh) ;
`;

export const AnimatedShapes = () => {
  return (
    <>
      <Square />
      <Circle />
      <Rectangle />
    </>
  );
};

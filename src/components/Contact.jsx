import React from "react";
import styled from "styled-components";
import Map from "../img/map.png";
import Phone from "../img/phone.png";
import Send from "../img/send.png";

const Container = styled.div`
  height: 90%;
  background: url("https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
`;
const Wrapper = styled.div`   
  height: 100%;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const Address = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;
const AddressIcon = styled.img`
  width: 20px;
  margin-right: 10px;
`;
const AddressText = styled.span`
  font-size: 20px;
  @media only screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
const Form = styled.form`
  display: flex;

  align-items: center;
  justify-content: center;
  height: 250px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    height: 50%;
  }
`;

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    height: 50%;
  }
`;

const Input = styled.input`
  padding: 20px;
  width: 200px;
  border-radius: 10px;
  @media only screen and (max-width: 480px) {
    padding: 10px;
  }
`;
const TextArea = styled.textarea`
  width: 200px;
  height: 75px;
  border-radius: 10px;
  @media only screen and (max-width: 480px) {
    padding: 10px;
  }
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: blue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
  font-size: 15px;
`;  

const Title = styled.h1`
  font-size: 70px;
  margin-top: 0px;
  margin: 50px;
  @media only screen and (max-width: 480px) {
    font-size: 30px;
    margin: 20px;
  }
`;

export const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>Contact Us</Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Your Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <Address>
          <h3>Address</h3>
          <AddressItem>
            <AddressIcon src={Map} />
            <AddressText>
              123 Fake Street, Fake City, Fake State, Fake Country
            </AddressText>
          </AddressItem>
          <AddressItem>
            <AddressIcon src={Phone} />
            <AddressText>123-456-7890</AddressText>
          </AddressItem>
          <AddressItem>
            <AddressIcon src={Send} />
            <AddressText>info@gozutok.info</AddressText>
          </AddressItem>
        </Address>
      </Wrapper>
    </Container>
  );
};

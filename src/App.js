import logo from "./logo.svg";
import "./App.css";
import styledComponents, { css } from "styled-components";
import { Navbar } from "./components/Navbar";
import { Intro } from "./components/Intro";
import { Features } from "./components/Features";
import { Services } from "./components/Services";
import { Price } from "./components/Price";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const Container = styledComponents.div`
   height: 100vh;
  overflow: hidden;
  position: relative;


`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
const IntoShape = styledComponents.div`
  ${Shape}
clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
background-color: crimson;
`;
const FeatureShape = styledComponents.div`
  ${Shape}
clip-path: polygon(0 0, 55% 0%, 33% 100%, 0% 100%);
background-color: blue;
`;
const ServiceShape = styledComponents.div`
  ${Shape}
clip-path: polygon(0 0, 33% 0%, 33% 100%, 0% 100%);
background-color: pink;
`;

const PriceShape = styledComponents.div`
  ${Shape}
clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
background-color: crimson;
`;

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntoShape />
      </Container>
      <Container>
        <Features />
        <FeatureShape />
      </Container>
      <Container>
        <Services />
        <ServiceShape />
      </Container>
      <Container>
        <Price />
        <PriceShape />
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

export default App;

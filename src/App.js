import logo from "./logo.svg";
import "./App.css";
import styledComponents, { css } from "styled-components";
import { Navbar } from "./components/Navbar";
import { Intro } from "./components/Intro";
import { Features } from "./components/Features";

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
clip-path: polygon(100% 0%, 51% 0%, 32% 100%, 100% 100%);
background-color: crimson;
`;
const FeatureShape = styledComponents.div`
  ${Shape}
clip-path: polygon(100% 0%, 51% 0%, 32% 100%, 100% 100%);
background-color: pink;
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
      </Container>{" "}
    </>
  );
}

export default App;

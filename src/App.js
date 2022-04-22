import React from "react";
import styled from "styled-components";
import Toggle from "./components/Toggle";
import Tab from "./components/Tab";
function App() {
  return (
    <Wrap>
      <Toggle />
      <Tab />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rebeccapurple;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App;

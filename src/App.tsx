import React from "react";
import { Title } from './components/Title/Title'

function App() {
  return (
    <React.Fragment>
      <Title size="x-large">x-large Title</Title>
      <Title size="large">large Title</Title>
      <Title size="medium">medium Title</Title>
      <Title size="small">small Title</Title>
      <Title size="x-small">x-small</Title>
      <Title size="xx-small">xx-small</Title>
    </React.Fragment>
  );
}

export default App;

import React from "react";
import { Title, Paragraph } from './components'

function App() {
  return (
    <React.Fragment>
      <Title>x-large Title</Title>
      <Title as='h2'>large Title</Title>
      <Title as='h3'>medium Title</Title>
      <Title as='h4'>small Title</Title>
      <Title as='h5'>x-small Title</Title>
      <Title as="h6">xx-small Title</Title>

      <Paragraph>Paragrapah Regular</Paragraph>
      <Paragraph weight="bold">Paragrapah Bold</Paragraph>
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import './App.css';
import Results from "./components/Results";
import Header from "./components/Header";
import Container from './components/Container';
import Row from "./components/Row"


function App() {
  return (
    <>
      <Header />
      <Container>
        <Row>

          <Results />

        </Row>
      </Container>
    </>
  );
}

export default App;

import React from 'react';
import './App.css';
import Results from "./components/Results";
import Header from "./components/Header";
import Container from './components/Container';
import Col from "./components/Col";
import Row from "./components/Row"


function App() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <Results />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

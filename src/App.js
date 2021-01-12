import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Navi from "./components/Navi/Navi";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Container fluid>
      <Navi />
      <Footer />
    </Container>
    
  );
}

export default App;


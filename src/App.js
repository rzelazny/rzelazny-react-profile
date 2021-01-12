import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Container fluid>
      <Navbar />
      <Footer />
    </Container>
  );
}

export default App;


import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Navi from "./components/Navi/Navi";
import Footer from "./components/Footer/Footer";
import { HashRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";


function App() {
  return (<div>
    <HashRouter basename="/">
    <Navi />
      <Switch>
        <Route exact path='/' component={About} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
        <Route component={NoMatch} />
      </Switch>
    </HashRouter>
    <Footer />
  </div>);
}

export default App;


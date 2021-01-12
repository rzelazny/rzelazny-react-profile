import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

//fix for gh-pages upload issue
const BASE_NAME = "/";

function App() {
  return (
    <Router basename={`${BASE_NAME}`}>
      <Nav />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/Projects/" component={Projects} />
        <Route exact path="/Projects/:id" component={Projects} />
        <Route exact path="/Contact/" component={Contact} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;

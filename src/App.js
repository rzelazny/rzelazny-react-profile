import React from "react";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

//fix for gh-pages upload issue
const BASE_NAME = "/";

function App() {
  return (
    <div>
      <Nav />
      <About />
    </div>

  );
}

export default App;

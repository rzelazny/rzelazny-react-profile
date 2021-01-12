import React from 'react';
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem } from 'reactstrap';
import { HashRouter, Route, Link } from "react-router-dom";
import About from "../../pages/About";
import Projects from '../../pages/Projects';
import Contact from '../../pages/Contact';
import NoMatch from '../../pages/NoMatch';


const Navi = (props) => {
    return (
        <div>
            <HashRouter basename="/">
                <Nav>
                    <NavItem>
                        <NavLink><Link href="/" to="/">About</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Link href="/projects" to="/projects">Projects</Link> </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Link href="/contact" to="/contact">Contact Me</Link> </NavLink>
                    </NavItem>
                </Nav>
                <Route exact path="/" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/contact" component={Contact} />
                {/* <Route component={NoMatch} /> */}
            </HashRouter>
        </div>
    );
}

export default Navi;

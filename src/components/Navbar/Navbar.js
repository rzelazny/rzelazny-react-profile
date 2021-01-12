import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { HashRouter, Route, Link } from "react-router-dom";
import About from "../../pages/About";
import Projects from '../../pages/Projects';
import Contact from '../../pages/Contact';


const Navbar = (props) => {
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
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
            </HashRouter>
            <hr />
        </div>
    );
}

export default Navbar;

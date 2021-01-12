import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import "./navi.css";

const Navi = props => {
    const [isOpen, toggle] = useState(false);

    return (
        <div>
            <Navbar className="naviBar" expand="md" light>
                <NavbarBrand href="/" className="mr-auto" id="brand">
                    Ryan Zelazny
                </NavbarBrand>
                <NavbarToggler onClick={() => toggle(!isOpen)} className="mr-2" />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink exact className="nav-link" to="/">
                                About 
                </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink exact className="nav-link" to="/projects">
                                Projects
                </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink exact className="nav-link" to="/contact">
                                Contact
                </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Navi;
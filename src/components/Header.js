import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import NavItem from './NavItem'

function Header() {
    return (
        <div>

            <Navbar className="nav" expand="lg" variant="dark">
                <Navbar.Brand><img id="nav-logo" src="./images/text-logo-alpha.png" alt="logo-alpha"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavItem eventKey="link-1" to="section1" title="About" />
                        <NavItem eventKey="link-3" to="section2" title="Portfolio" />
                        <NavItem eventKey="link-2" to="section3" title="Services" />
                        <NavItem eventKey="link-4" to="section4" title="Pricing" />
                        <NavItem eventKey="link-5" to="section5" title="Contact" />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
}

export default Header;
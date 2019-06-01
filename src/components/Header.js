import React from 'react';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

import NavItem from './NavItem'

function Header() {
    return (
        <div>

            <Nav className="justify-content-end">
                <NavItem eventKey="link-1" to="section1" title="About" />
                <NavItem eventKey="link-2" to="section2" title="Services" />
                <NavItem eventKey="link-3" to="section3" title="Portfolio" />
                <NavItem eventKey="link-4" to="section4" title="Pricing" />
                <NavItem eventKey="link-5" to="section5" title="Contact" />
            </Nav>

            {/* <Navbar className="nav" collapseOnSelect expand="lg">
                <Navbar.Brand>Slice Visual Studio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <NavItem eventKey="link-1" to="section1" title="About" />
                        <NavItem eventKey="link-2" to="section2" title="Services" />
                        <NavItem eventKey="link-3" to="section3" title="Portfolio" />
                        <NavItem eventKey="link-4" to="section4" title="Pricing" />
                        <NavItem eventKey="link-5" to="section5" title="Contact" />
                    </Nav>
                </Navbar.Collapse>
            </Navbar> */}

        </div>
    );
}

export default Header;
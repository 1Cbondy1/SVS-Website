import React from 'react';
import Nav from 'react-bootstrap/Nav';

import NavItem from './NavItem'

function Header() {
  return (
    <div>

      <Nav className="justify-content-end">

      {/* <Nav.Item>
        <Nav.Link eventKey="link-0"><img id="nav-logo" src="images/SVS_text-logo.jpg" alt="slice-logo" /></Nav.Link>
      </Nav.Item> */}

      <NavItem eventKey="link-1" to="section1" title="About" />
      <NavItem eventKey="link-2" to="section2" title="Services" />
      <NavItem eventKey="link-3" to="section3" title="Portfolio" />
      <NavItem eventKey="link-4" to="section4" title="Pricing" />
      <NavItem eventKey="link-5" to="section5" title="Contact" />

      </Nav>

    </div>
  );
}

export default Header;
import React from 'react';
import Nav from 'react-bootstrap/Nav';

import { Link } from "react-scroll";

function Header() {
  return (
    <div>

      <Nav className="justify-content-end">

      {/* <Nav.Item>
        <Nav.Link eventKey="link-0"><img id="nav-logo" src="images/SVS_text-logo.jpg" alt="slice-logo" /></Nav.Link>
      </Nav.Item> */}

      <Nav.Item>
        <Nav.Link eventKey="link-1">
          <Link activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}>
            About
          </Link>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="link-2">
          <Link activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration={500}>
            Services
          </Link>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="link-3">
          <Link activeClass="active" to="section3" spy={true} smooth={true} offset={-70} duration={500}>
            Portfolio
          </Link>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="link-4">
          <Link activeClass="active" to="section4" spy={true} smooth={true} offset={-70} duration={500}>
            Pricing
          </Link>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="link-5">
          <Link activeClass="active" to="section5" spy={true} smooth={true} offset={-70} duration={500}>
            Contact
          </Link>
        </Nav.Link>
      </Nav.Item>

      </Nav>

    </div>
  );
}

export default Header;

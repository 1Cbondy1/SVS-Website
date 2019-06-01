import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <div>

      <Nav className="justify-content-end">

      {/* <Nav.Item>
        <Nav.Link eventKey="link-0"><img id="nav-logo" src="images/SVS_text-logo.jpg" alt="slice-logo" /></Nav.Link>
      </Nav.Item> */}

      <Nav.Item>
        <Nav.Link eventKey="link-1">About</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="link-2">Services</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="link-3">Portfolio</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="link-4">Pricing</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="link-4">Contact</Nav.Link>
      </Nav.Item>

      </Nav>

    </div>
  );
}

export default Header;

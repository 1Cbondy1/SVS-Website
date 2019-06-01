import React from 'react';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-scroll';

function NavItem(props) {
    return (
        <div>
            <Nav.Item>
                <Nav.Link eventKey={props.eventKey}>
                    <Link activeClass="active" to={props.to} spy={true} smooth={true} offset={-70} duration={500}>
                        {props.title}
                    </Link>
                </Nav.Link>
            </Nav.Item>
        </div>
    );
}

export default NavItem;
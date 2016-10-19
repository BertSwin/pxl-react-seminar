import React from 'react';
import {Navbar, Nav, NavItem, Glyphicon} from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';

class NavbarTop extends React.Component {
  render() {
    return (
        <div>
          <Navbar fixedTop default>
            <Navbar.Header>
              <Navbar.Brand>
                <IndexLinkContainer to="/">
                  <a>Your App Title</a>
                </IndexLinkContainer>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <IndexLinkContainer to="/">
                  <NavItem><Glyphicon glyph="flag"/> Introduction</NavItem>
                </IndexLinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
    );
  }
}

export default NavbarTop;

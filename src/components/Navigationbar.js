import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
  background-color: #0C1A30;
}

.navbar-brand, .navbar-nav .nav-link, .navbar-toggle {
  color: #FF72BD;

&: hover {
  color: white;
}

}`

export const Navigationbar = () => (
    <Styles>
      <Navbar expand="lg">
          <Navbar.Brand href="/">Collabeteria</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Search">Find Collaborators</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
)

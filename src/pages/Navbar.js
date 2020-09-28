import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../logo.png";

export default function Navbarr() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="35"
            height="35"
            className="d-inline-block align-top"
            alt="Pokemon Finder"
          />{" "}
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/data-all">Data Pokemon</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

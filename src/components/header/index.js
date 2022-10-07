import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      style={{ background: "#a04bdb", borderRadius: "5px", marginTop: "4px" }}
      className="justify"
    >
      <Navbar.Brand>Música Sendo Útil</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link as={Link} to="/">
            Início
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/sobre">
            Sobre
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/temap">
            Tema Pedagógico
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

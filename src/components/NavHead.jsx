import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo_green_terrace.png";


export default function NavHead() {
  return (
  

      <Navbar
        expand="sm"
        data-bs-theme="dark"
        sticky="top"
        style={{ backgroundColor: "#284237"}}
      >
        <Container>
          <Navbar.Brand className="text-light py-4" href="#home">
            <img
              src={logo}
              width="150"
              className="d-inline-block align-center position-absolute"
              style={{ top: "10px" }}
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="text-center" id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link className="fw-bold text-light" href="#home">
                ABOUT
              </Nav.Link>
              <Nav.Link className="fw-bold text-light" href="#link">
                MENU
              </Nav.Link>
              <Nav.Link className="fw-bold text-light" href="#link">
                ORDER FOOD
              </Nav.Link>
              <Nav.Link className="fw-bold text-light" href="#link">
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   
  );
}

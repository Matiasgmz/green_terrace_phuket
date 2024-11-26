import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function NavInfo() {
  return (
    <Navbar bg="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link className="text-light" href="#home">
            <FontAwesomeIcon style={{ fontSize: "0.8rem" }} icon={faPhone} />{" "}
            0786216961
          </Nav.Link>
          <Nav.Link className="text-light" href="#link">
            <FontAwesomeIcon style={{ fontSize: "0.8rem" }} icon={faEnvelope} />{" "}
            greenterrace.contact@gmail.com
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

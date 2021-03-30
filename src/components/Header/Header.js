import React from "react";
import { Image, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import avatar from "../../images/Avatar face.png";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">Grocery-Wish</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mr-4">
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/orders">
              <Nav.Link>Orders</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin">
              <Nav.Link>Admin</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/deals">
              <Nav.Link>Deals</Nav.Link>
            </LinkContainer>

            <Image src={avatar} roundedCircle style={{ width: "30px" }} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

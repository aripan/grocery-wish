import React, { useContext } from "react";
import { Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { GroceryAuthContext } from "../../App";
import avatar from "../../images/Avatar face.png";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(GroceryAuthContext);
  const handleLogOut = () => {
    const loggedOutUser = {};
    setLoggedInUser(loggedOutUser);
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <LinkContainer to="/home">
          <Navbar.Brand>Grocery-Wish</Navbar.Brand>
        </LinkContainer>
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
            {loggedInUser.email ? (
              <NavDropdown
                title={loggedInUser.name || "Test User"}
                id="basic-nav-dropdown"
              >
                <LinkContainer to="/">
                  <NavDropdown.Item onClick={handleLogOut}>
                    logout
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}

            <Image src={avatar} roundedCircle style={{ width: "30px" }} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

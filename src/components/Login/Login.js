import React, { useContext } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { GroceryAuthContext } from "../../App";
import { signInWithGoogle } from "./firebase.config";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(GroceryAuthContext);

  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((res) => {
      setLoggedInUser(res);
      history.replace(from);
    });
  };
  console.log(loggedInUser);

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Card className="text-center m-3">
        <Card.Header>
          <h4>Login</h4>
        </Card.Header>
        <Card.Body>
          <Card.Title>Sign in using your google account</Card.Title>

          <Button variant="primary" onClick={handleGoogleSignIn}>
            Login
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;

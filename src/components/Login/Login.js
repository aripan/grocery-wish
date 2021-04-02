import React, { useContext } from "react";
import { Button } from "react-bootstrap";
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
    <div>
      <h3>Sign in using your google account</h3>
      <Button onClick={handleGoogleSignIn}>Sign In</Button>
    </div>
  );
};

export default Login;

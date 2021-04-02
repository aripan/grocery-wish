import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { GroceryAuthContext } from "../../App";
import { signInWithGoogle } from "./firebase.config";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(GroceryAuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((res) => setLoggedInUser(res));
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

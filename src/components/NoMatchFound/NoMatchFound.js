import React from "react";
import { Alert, Container } from "react-bootstrap";

const NoMatchFound = () => {
  return (
    <Container>
      <Alert variant="danger" className="text-center m-3">
        <h2>Sorry No Match Found</h2>
      </Alert>
    </Container>
  );
};

export default NoMatchFound;

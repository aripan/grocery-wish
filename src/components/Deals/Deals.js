import React from "react";
import { Alert, Container } from "react-bootstrap";

const Deals = () => {
  return (
    <Container>
      <Alert variant="warning" className="text-center m-3">
        <h3>Sorry, but No deal to reveal...</h3>
      </Alert>
    </Container>
  );
};

export default Deals;

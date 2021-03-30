import React from "react";
import { Button, Container, Row, Table } from "react-bootstrap";

const AddToBasket = () => {
  return (
    <Container>
      <Row className="mt-5">
        <h3>Checkout</h3>
      </Row>
      <Row className="mt-4">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td colSpan="2">Total</td>
              <td>Otto</td>
            </tr>
          </tbody>
        </Table>
      </Row>
      <Row>
        <Button>Checkout</Button>
      </Row>
    </Container>
  );
};

export default AddToBasket;

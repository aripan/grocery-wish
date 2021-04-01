import React, { useEffect, useState } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import { useParams } from "react-router";

const Checkout = () => {
  const { productId } = useParams();
  const [checkOutItems, setCheckOutItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setCheckOutItems(data));
  }, [productId]);

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
              <td>{checkOutItems.name}</td>
              <td>{checkOutItems.quantity || 1}</td>
              <td>${checkOutItems.price}</td>
            </tr>
            <tr>
              <td colSpan="2">Total</td>
              <td>${checkOutItems.price}</td>
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

export default Checkout;

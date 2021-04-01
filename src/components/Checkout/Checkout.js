import React, { useEffect, useState } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import { useParams } from "react-router";

const Checkout = () => {
  const { productId } = useParams();
  const [checkOutItems, setCheckOutItems] = useState([]);
  const [checkoutItemQuantity, setCheckoutItemQuantity] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setCheckOutItems(data));
  }, [productId]);

  const handleCheckout = () => {
    const totalCost = checkoutItemQuantity * checkOutItems.price;
    const newOrderedItem = {
      ...checkOutItems,
      quantity: checkoutItemQuantity,
      totalCost,
      orderTime: new Date(),
    };

    fetch("http://localhost:5000/addNewOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newOrderedItem),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

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
              <td>
                <input
                  type="number"
                  defaultValue={checkoutItemQuantity}
                  min="1"
                  onChange={(e) => setCheckoutItemQuantity(e.target.value)}
                />
              </td>

              {/* <td>{checkoutItemQuantity}</td> */}
              <td>${checkOutItems.price}</td>
            </tr>
            <tr>
              <td colSpan="2">Total</td>
              <td>${checkoutItemQuantity * checkOutItems.price}</td>
            </tr>
          </tbody>
        </Table>
      </Row>
      <Row>
        <Button onClick={handleCheckout}>Checkout</Button>
      </Row>
    </Container>
  );
};

export default Checkout;

import React, { useContext, useEffect, useState } from "react";
import { Alert, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GroceryAuthContext } from "../../App";

const Orders = () => {
  const [orderedItems, setOrderedItems] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(GroceryAuthContext);

  useEffect(() => {
    fetch(
      `https://protected-tor-23806.herokuapp.com/orderedProducts?email=${loggedInUser.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrderedItems(data));
  }, [loggedInUser.email]);

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="m-3">Ordered Items</h2>
          {orderedItems.length === 0 ? (
            <Alert
              variant="success"
              style={{
                fontSize: "20px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Order is empty
            </Alert>
          ) : (
            <ListGroup variant="flush" className="text-center">
              {orderedItems.map((item, index) => (
                <ListGroup.Item key={index}>
                  <Row className="d-flex justify-content-center align-items-center">
                    <Col sm={3} md={3}>
                      <Image src={item.imageURL} alt={item.name} fluid />
                    </Col>
                    <Col>
                      <Link to="/">
                        <h6>{item.name}</h6>
                      </Link>
                    </Col>
                    <Col sm={4} md={4}>
                      <h6>
                        {item.quantity || 1} x &euro;{item.price}= &euro;
                        {item.quantity * item.price}
                      </h6>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Orders;

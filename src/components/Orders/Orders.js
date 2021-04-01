import React, { useEffect, useState } from "react";
import { Alert, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orderedItems, setOrderedItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrderedItems(data));
  }, []);

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
            <ListGroup variant="flush">
              {orderedItems.map((item, index) => (
                <ListGroup.Item key={index}>
                  <Row>
                    <Col sm={2} md={2}>
                      <Image src={item.image} alt={item.name} fluid />
                    </Col>
                    <Col>
                      <Link>{item.name}</Link>
                    </Col>
                    <Col sm={6} md={6}>
                      {item.qty || 1} x &euro;{item.price}= &euro;
                      {item.qty * item.price}
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

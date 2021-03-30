import React from "react";
import { Alert, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import fakeData from "../../fakeProducts/fakeProducts.json";

const Orders = () => {
  const first3 = fakeData.slice(0, 3);
  console.log(first3);

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="m-3">Ordered Items</h2>
          {first3.length === 0 ? (
            <Alert variant="success">Order is empty</Alert>
          ) : (
            <ListGroup variant="flush">
              {first3.map((item, index) => (
                <ListGroup.Item key={index}>
                  <Row>
                    <Col sm={2} md={2}>
                      <Image src={item.image} alt={item.name} fluid />
                    </Col>
                    <Col>
                      <Link>{item.name}</Link>
                    </Col>
                    <Col sm={6} md={6}>
                      {/* {item.qty} x &euro;{item.price}= &euro;
                        {item.qty * item.price} */}
                      ${item.price}
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

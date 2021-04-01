import React from "react";
import { Button, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ProductDetails = ({
  productId,
  productName,
  productWeight,

  productPrice,
  productImage,
}) => {
  return (
    <Card
      className="shadow bg-body rounded"
      style={{
        width: "18rem",
        maxHeight: "22rem",
        margin: "1rem",
      }}
    >
      <Card.Img
        variant="top"
        src={productImage}
        style={{ maxHeight: "14rem" }}
      />
      <Card.Body>
        <Card.Title>
          {productName}-{productWeight}
        </Card.Title>
        <div className="d-flex justify-content-around align-items-center">
          <Card.Text style={{ fontSize: "16px", fontWeight: "700" }}>
            &euro;{productPrice}
          </Card.Text>
          <LinkContainer to={`/checkout/${productId}`}>
            <Button className="btn btn-success rounded-pill">Buy Now</Button>
          </LinkContainer>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductDetails;

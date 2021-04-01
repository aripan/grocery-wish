import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductDetails from "../ProductDetails/ProductDetails";
import SearchBar from "../SearchBar/SearchBar";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Container>
        <SearchBar></SearchBar>
        <Row>
          {products.map((pd) => (
            <Col sm={12} md={6} lg={4} key={pd._id}>
              <ProductDetails
                productId={pd._id}
                productName={pd.name}
                productWeight={pd.weight}
                productUnit={pd.unit}
                productPrice={pd.price}
                productImage={pd.imageURL}
              ></ProductDetails>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;

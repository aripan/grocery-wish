import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import fakeProducts from "../../fakeProducts/fakeProducts.json";
import ProductDetails from "../ProductDetails/ProductDetails";
import SearchBar from "../SearchBar/SearchBar";

const Home = () => {
  return (
    <div>
      <Container>
        <SearchBar></SearchBar>
        <Row>
          {fakeProducts.map((pd) => (
            <Col sm={12} md={6} lg={4}>
              <ProductDetails
                productName={pd.name}
                productWeight={pd.weight}
                productPrice={pd.price}
                productImage={pd.image}
              ></ProductDetails>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;

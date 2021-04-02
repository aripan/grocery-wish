import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Loader from "../Loader/Loader";
import ProductDetails from "../ProductDetails/ProductDetails";
import SearchBar from "../SearchBar/SearchBar";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://protected-tor-23806.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} md={{ offset: "3" }}>
            <SearchBar></SearchBar>
          </Col>
        </Row>

        <Row>
          {products.length === 0 ? (
            <Loader />
          ) : (
            products.map((pd) => (
              <Col sm={12} md={6} lg={4} key={pd._id}>
                <ProductDetails
                  productId={pd._id}
                  productName={pd.name}
                  productWeight={pd.weight}
                  productPrice={pd.price}
                  productImage={pd.imageURL}
                ></ProductDetails>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Home;

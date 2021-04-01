import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddNewProduct = () => {
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const { name, weight, price } = data;
    const addedNewProduct = {
      name,
      weight,
      price,
      imageURL,
    };
    console.log(addedNewProduct);

    fetch("http://localhost:5000/addNewProducts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addedNewProduct),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "66ea3518e768c4f5a746330cb26f8d92");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((res) => setImageURL(res.data.data.display_url));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col sm={12} md={4} lg={3}>
            <label>Product Name</label>
            <br />
            <input
              name="name"
              placeholder="Product Name"
              ref={register}
              required
            />
          </Col>
          <Col sm={12} md={4} lg={3}>
            <label>Weight</label>
            <br />
            <input
              name="weight"
              placeholder="Product Weight"
              ref={register}
              required
            />
          </Col>
          <Col sm={12} md={4} lg={3}>
            <label>Measurement unit</label>
            <br />
            <input
              name="unit"
              placeholder="Product Unit"
              ref={register}
              required
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <label>Price</label>
            <br />
            <input
              name="price"
              placeholder="Product Price"
              type="number"
              ref={register}
              required
            />
          </Col>
          <Col sm={12} md={6}>
            <label>Image</label>
            <br />
            <input
              name="picture"
              type="file"
              onChange={handleImageUpload}
              required
            />
          </Col>
        </Row>

        <Row md={6}>
          <input type="submit" />
        </Row>
      </form>
    </Container>
  );
};

export default AddNewProduct;

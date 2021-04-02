import React, { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import axios from "axios";

const AddNewProduct = () => {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState(1);
  const [price, setPrice] = useState(0);
  const [imageURL, setImageURL] = useState(null);

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "66ea3518e768c4f5a746330cb26f8d92");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((res) => setImageURL(res.data.data.display_url));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const addedNewProduct = {
      name,
      weight,
      price,
      imageURL,
      updateTime: new Date(),
    };

    fetch("https://protected-tor-23806.herokuapp.com/addNewProducts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addedNewProduct),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <Container style={{ maxWidth: "30rem" }}>
      <Alert variant="info">
        <h4>Add New Product</h4>
      </Alert>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label> Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="weight">
          <Form.Label> Product Weight</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="image">
          <Form.Label>Product Image</Form.Label>
          <Form.Control
            type="file"
            placeholder="Enter image"
            onChange={handleImageUpload}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Add New Product
        </Button>
      </Form>
    </Container>
  );
};

export default AddNewProduct;

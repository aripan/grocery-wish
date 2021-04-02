import React, { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import axios from "axios";

const EditProduct = ({ editableProduct }) => {
  const [name, setName] = useState(editableProduct.name || "");
  const [weight, setWeight] = useState(editableProduct.weight || 0);
  const [price, setPrice] = useState(editableProduct.price || 0);
  const [imageURL, setImageURL] = useState(editableProduct.imageURL || "");

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "66ea3518e768c4f5a746330cb26f8d92");
    imageData.append("image", event.target.files[0]);
    axios.post("https://api.imgbb.com/1/upload", imageData).then((res) => {
      setImageURL(res.data.data.display_url);
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const updatedProduct = {
      name,
      weight,
      price,
      imageURL,
      updateTime: new Date(),
    };

    fetch(
      `https://protected-tor-23806.herokuapp.com/products/${editableProduct._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <Container style={{ maxWidth: "30rem" }}>
      <Alert variant="info">
        <h4>Edit Product</h4>
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

          {/* {handleImageUpload && <Loader />} */}
        </Form.Group>
        <Button type="submit" variant="primary">
          Update
        </Button>
      </Form>
    </Container>
  );
};

export default EditProduct;

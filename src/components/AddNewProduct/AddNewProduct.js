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
      <Card className="w-100 mt-md-5">
        <Card.Header as="h5">Add New Product</Card.Header>
        <Card.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col>
                <input
                  name="name"
                  defaultValue="test"
                  ref={register}
                  required
                />
              </Col>
              <Col>
                <input name="weight" ref={register} required />
              </Col>
            </Row>
            <Row>
              <Col>
                <input name="price" type="number" ref={register} required />
              </Col>
              <Col>
                <input
                  name="picture"
                  type="file"
                  onChange={handleImageUpload}
                  required
                />
              </Col>
            </Row>

            <input type="submit" />
          </form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddNewProduct;

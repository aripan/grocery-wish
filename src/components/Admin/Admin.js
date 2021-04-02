import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import EditProduct from "../EditProduct/EditProduct";
import Home from "../Home/Home";
import ManageProduct from "../ManageProduct/ManageProduct";
import DrawerComponent from "./DrawerComponent";

const Admin = () => {
  const [products, setProducts] = useState([]);

  const [editableProduct, setEditableProduct] = useState({});

  useEffect(() => {
    fetch("https://protected-tor-23806.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleEditOption = (id) => {
    const findProductToEdit = products.find((pd) => pd._id === id);
    setEditableProduct(findProductToEdit);
  };

  const handleDeleteOption = (id) => {
    const deleteURL = `https://protected-tor-23806.herokuapp.com/deleteProduct/${id}`;
    fetch(deleteURL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const filteredProducts = products.filter((pd) => pd._id !== id);
          setProducts(filteredProducts);
          // setDeleteMessage("Product has been deleted");
        }
      });
  };

  return (
    <Router>
      <DrawerComponent>
        <Switch>
          <Route exact path="/admin">
            <AddNewProduct></AddNewProduct>
          </Route>
          <Route exact path="/admin/manageProduct">
            <ManageProduct
              products={products}
              handleEditOption={handleEditOption}
              handleDeleteOption={handleDeleteOption}
            ></ManageProduct>
          </Route>
          <Route exact path="/admin/editProduct">
            <EditProduct editableProduct={editableProduct}></EditProduct>
          </Route>
        </Switch>
      </DrawerComponent>
    </Router>
  );
};

export default Admin;

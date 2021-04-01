import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import EditProduct from "../EditProduct/EditProduct";
import ManageProduct from "../ManageProduct/ManageProduct";

const Admin = () => {
  const [products, setProducts] = useState([]);

  const [editableProduct, setEditableProduct] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleEditOption = (id) => {
    const findProductToEdit = products.find((pd) => pd._id === id);
    setEditableProduct(findProductToEdit);
  };

  const handleDeleteOption = (id) => {
    const deleteURL = `http://localhost:5000/deleteProduct/${id}`;
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
      <div>
        <ul>
          <li>
            <Link to="/admin">Add New Products</Link>
          </li>
          <li>
            <Link to="/admin/manageProduct">Manage Product</Link>
          </li>
          {editableProduct && (
            <li>
              <Link to="/admin/editProduct">Edit Product</Link>
            </li>
          )}
        </ul>

        <hr />
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
      </div>
    </Router>
  );
};

export default Admin;

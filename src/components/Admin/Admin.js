import React from "react";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ManageProduct from "../ManageProduct/ManageProduct";

const Admin = () => {
  return (
    <div>
      <AddNewProduct></AddNewProduct>
      <ManageProduct></ManageProduct>
    </div>
  );
};

export default Admin;

import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

// const createData = (name, weight, price, action, protein) => {
//   return { name, weight, price, action, protein };
// };

// const rows = [
//   // createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   // createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   // createData("Eclair", 262, 16.0, 24, 6.0),
//   // createData("Cupcake", 305, 3.7, 67, 4.3),
//   // createData("Gingerbread", 356, 16.0, 49, 3.9),

//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const ManageProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const classes = useStyles();

  const handleEditOption = () => {
    console.log("handleEditOption working");
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
        }
      });
  };

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Product Name</StyledTableCell>
              <StyledTableCell align="right">Weight</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <StyledTableRow key={product._id}>
                <StyledTableCell component="th" scope="row">
                  {product.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {product.weight}
                  {product.unit}
                </StyledTableCell>
                <StyledTableCell align="right">{product.price}</StyledTableCell>
                <StyledTableCell align="right">
                  <EditIcon className="m-1" onClick={handleEditOption} />
                  <DeleteForeverIcon
                    className="m-1"
                    onClick={() => {
                      handleDeleteOption(product._id);
                    }}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ManageProduct;

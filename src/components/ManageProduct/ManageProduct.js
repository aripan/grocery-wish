import React from "react";
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
import { Alert } from "@material-ui/lab";
import { Link } from "react-router-dom";

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

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },

  title: {
    textAlign: "center",
  },
});

const ManageProduct = ({ products, handleEditOption, handleDeleteOption }) => {
  const classes = useStyles();

  return (
    <Container>
      <Alert severity="error" className={classes.title}>
        <div>
          <h4>Manage Products</h4>
          <p>Deleting (or editing) products will bring changes in UI</p>
        </div>
      </Alert>
      <br />
      <TableContainer component={Paper}>
        {/* {deleteMessage && <Alert>{deleteMessage}</Alert>} */}
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
                  <Link to="/admin/editProduct">
                    <EditIcon
                      className="m-1"
                      onClick={() => {
                        handleEditOption(product._id);
                      }}
                    />
                  </Link>

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

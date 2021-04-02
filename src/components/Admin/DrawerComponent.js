import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {
  AddCircleOutlineOutlined,
  SubjectOutlined,
  EditOutlined,
} from "@material-ui/icons";
import { useHistory, useLocation } from "react-router";

const drawerWidth = "25%";
const useStyle = makeStyles((theme) => {
  return {
    page: {
      //   background: "#f9f9f9",
      marginLeft: "25%",
      padding: theme.spacing(3),
    },

    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
      background: "#3f3f5a",
      color: "#fff",
    },

    root: {
      display: "flex",
    },

    active: {
      background: "#d2d2e0",
      color: "#000",
    },

    title: {
      padding: theme.spacing(2),
      paddingTop: theme.spacing(3),
      color: "#fff",
    },
  };
});

const menuItems = [
  {
    text: "Manage Products",
    icon: <SubjectOutlined color="secondary" />,
    path: "/admin",
  },
  {
    text: "Add New Product",
    icon: <AddCircleOutlineOutlined color="secondary" />,
    path: "/admin/addNewProduct",
  },
  {
    text: "Edit Product",
    icon: <EditOutlined color="secondary" />,
    path: "/admin/editProduct",
  },
];

const DrawerComponent = ({ children }) => {
  const classes = useStyle();
  const history = useHistory();
  const location = useLocation();
  return (
    <div classes={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Grocery Wish
          </Typography>
        </div>
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() => {
                history.push(item.path);
              }}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default DrawerComponent;

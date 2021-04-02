import React from "react";
import {
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const drawerWidth = 240;
const useStyle = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing("3"),
    },

    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },

    displayView: {
      display: "flex",
    },

    active: {
      background: "#000",
    },

    title: {
      padding: theme.spacing("2"),
      paddingTop: theme.spacing("3"),
    },

    appbar: {
      width: `calc(100% -${drawerWidth}px)`,
    },
  };
});

const menuItems = [
  {
    text: "option 1",
    icon: <SubjectOutlined color="secondary" />,
    path: "/deals/option1",
  },
  {
    text: "option 2",
    icon: <AddCircleOutlineOutlined color="secondary" />,
    path: "/deals/option2",
  },
];

const DrawerComponent = () => {
  const classes = useStyle();
  const history = useHistory();
  const location = useLocation();
  return (
    <div classes={classes.displayView}>
      {/* <AppBar className={classes.appbar}>
        <Toolbar>
          <Typography>Welcome to the website ok ok</Typography>
        </Toolbar>
      </AppBar> */}
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
      <div className={classes.page}>
        <Router>
          <Switch>
            <Route path="/deals/option1"></Route>
            <Route path="/deals/option2"></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default DrawerComponent;

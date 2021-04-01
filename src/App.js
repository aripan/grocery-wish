import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import Admin from "./components/Admin/Admin";
import Deals from "./components/Deals/Deals";
import NoMatchFound from "./components/NoMatchFound/NoMatchFound";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <Router>
      <Header></Header>

      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/orders">
          <Orders></Orders>
        </Route>
        <Route path="/admin">
          <Admin></Admin>
        </Route>
        <Route path="/deals">
          <Deals></Deals>
        </Route>
        <Route path="/checkout/:productId">
          <Checkout></Checkout>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NoMatchFound></NoMatchFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

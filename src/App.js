import React from "react";
import "./App.css";
import Store from "./redux/configStore";
import { connect } from "react-redux";
import { getStock } from "./redux/modules/indegredient";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Login from "./page/Login";
import { Dashboard, Frozen, Login, Cold } from "./page/index";

function App() {
  function handleClick() {
    Store.dispatch(getStock()).then(result => {
      console.log(result);
    });
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/fronzen" component={Frozen} />
        <Route path="/cold" component={Cold} />
      </Switch>
    </BrowserRouter>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    getStock: () => dispatch(getStock())
  };
}

export default connect(null, mapDispatchToProps)(App);

import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Login from "./page/Login";
import { Dashboard, Frozen, Login, Cold } from "./page/index";

function App() {
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

export default App;

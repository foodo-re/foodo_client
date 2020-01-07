import React from "react";
import "./App.css";
import Store from "./redux/configStore";
import { connect } from "react-redux";
import { getStock } from "./redux/modules/indegredient";

function App() {
  function handleClick() {
    Store.dispatch(getStock()).then(result => {
      console.log(result);
    });
  }
  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    getStock: () => dispatch(getStock())
  };
}

export default connect(null, mapDispatchToProps)(App);

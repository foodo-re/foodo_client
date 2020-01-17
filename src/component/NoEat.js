import React, { useState } from "react";
import Store from "../redux/configStore";
import { connect } from "react-redux";

const NoEat = props => {
  return (
    <div className="noEat-container">
      <h2>No eat</h2>
      <div className="noEat-container-wrap">
        {props.stock
          ? props.stock.map(ing => {
              if (ing.msg === "No Eat") {
                return <span className="noEat-preview">{ing.name}</span>;
              }
            })
          : null}
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    stock: state.stock.data
  };
}
export default connect(mapStateToProps, null)(NoEat);

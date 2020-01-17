import React from "react";
import { connect } from "react-redux";

const DayMenu = props => {
  return (
    <div className="menu-container">
      {props.data ? console.log("메뉴", props.data) : null}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    data: state.menu.data
  };
}
export default connect(mapStateToProps, null)(DayMenu);

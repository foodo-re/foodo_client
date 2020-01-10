import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getStock } from "../redux/modules/stock";
import Store from "../redux/configStore";
import ColdSection from "../component/ColdSection";
import FrozenSection from "../component/FrozenSection";
import ShoppingNotes from "../component/ShoppingNotes";
import DayMenu from "../component/DayMenu";
import Chart from "../component/Chart";
import "./style.css";

function Dashboard() {
  const [stock, setStock] = useState([]);
  useEffect(() => {
    Store.dispatch(getStock()).then(() => {
      return Store.getState().stock.data;
    });
  });

  return (
    <div className="dash-container">
      <div className="dash-left">
        <div className="dash-refrg">
          <ColdSection />
          <FrozenSection />
        </div>
        <ShoppingNotes />
      </div>
      <div className="dash-right">
        <DayMenu />
        <Chart />
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    getStock: () => dispatch(getStock())
  };
}
export default connect(null, mapDispatchToProps)(Dashboard);

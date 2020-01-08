import React, { Component } from "react";
import ColdSection from "../component/ColdSection";
import FrozenSection from "../component/FrozenSection";
import ShoppingNotes from "../component/ShoppingNotes";
import DayMenu from "../component/DayMenu";
import Chart from "../component/Chart";
import "./style.css";

function Dashboard() {
  return (
    <div className="dash-container">
      <div className="dash-left">
        <ColdSection />
        <FrozenSection />
        <ShoppingNotes />
      </div>
      <div className="dash-right">
        <DayMenu />
        <Chart />
      </div>
    </div>
  );
}

export default Dashboard;

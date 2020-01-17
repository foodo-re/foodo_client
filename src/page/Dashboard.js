import React, { useEffect } from "react";
import { getStock } from "../redux/modules/stock";
import { getMenu } from "../redux/modules/menu";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faFish,
  faDrumstickBite,
  faCarrot,
  faLemon,
  faHamburger,
  faWineBottle,
  faBreadSlice,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";
import Store from "../redux/configStore";
import ColdSection from "../component/ColdSection";
import FrozenSection from "../component/FrozenSection";
import ShoppingNotes from "../component/ShoppingNotes";
import NoEat from "../component/NoEat";
import DayMenu from "../component/DayMenu";
import Chart from "../component/Chart";
import "./style.css";

function Dashboard() {
  useEffect(() => {
    Store.dispatch(getStock()).then(() => {
      return Store.getState().stock.data;
    });
    Store.dispatch(getMenu()).then(() => {
      return Store.getState().menu.data;
    });
  });
  //fontawesome library
  library.add(
    fab,
    faFish,
    faDrumstickBite,
    faCarrot,
    faLemon,
    faHamburger,
    faWineBottle,
    faBreadSlice,
    faCaretDown
  );

  return (
    <div className="dash-container">
      <div className="dash-left">
        <div className="dash-refrg">
          <ColdSection />
          <FrozenSection />
        </div>
        <div className="dash-notice">
          <NoEat />
          <ShoppingNotes />
        </div>
      </div>
      <div className="dash-right">
        <DayMenu />
        <Chart />
      </div>
    </div>
  );
}

export default Dashboard;

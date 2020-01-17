import React, { useState } from "react";
import Store from "../redux/configStore";

const NoEat = () => {
  const [stock, setStock] = useState([]);
  Store.subscribe(() => {
    setStock(Store.getState().stock.data);
  });

  return (
    <div className="noEat-container">
      <h2>No eat</h2>
      <div className="noEat-container-wrap">
        {stock.length
          ? stock.map(ing => {
              if (ing.msg === "No Eat") {
                return <span className="noEat-preview">{ing.name}</span>;
              }
            })
          : null}
      </div>
    </div>
  );
};

export default NoEat;

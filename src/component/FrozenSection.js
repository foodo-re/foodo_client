import React, { useState } from "react";
import Store from "../redux/configStore";

const FrozenSection = () => {
  const [stock, setStock] = useState([]);
  Store.subscribe(() => {
    setStock(Store.getState().stock.data);
  });
  return (
    <div className="cold-container">
      *냉동실*
      {console.log(stock)}
      {!stock.length
        ? null
        : stock.map(ing => {
            if (ing.frozen) {
              return (
                <div key={ing.id}>
                  {ing.name} / {ing.msg}
                </div>
              );
            }
          })}
    </div>
  );
};

export default FrozenSection;

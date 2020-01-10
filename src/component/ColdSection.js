import React, { useState } from "react";
import Store from "../redux/configStore";

const ColdSection = () => {
  const [stock, setStock] = useState([]);
  Store.subscribe(() => {
    setStock(Store.getState().stock.data);
  });
  return (
    <div className="cold-container">
      *냉장고*
      {!stock.length
        ? null
        : stock.map(ing => {
            if (!ing.frozen) {
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
export default ColdSection;

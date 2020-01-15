import React, { useState } from "react";
import Store from "../redux/configStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { categoryIcon, msgColor } from "../helper";

const FrozenSection = () => {
  const [stock, setStock] = useState([]);
  Store.subscribe(() => {
    setStock(Store.getState().stock.data);
  });
  return (
    <div className="cold-container">
      <span>냉동실</span>
      <div className="ingrediant-container-wrap">
        {!stock.length
          ? null
          : stock.map(ing => {
              if (ing.frozen && ing.msg !== "No Eat") {
                return (
                  <div className="ingrediant-container" key={ing.id}>
                    <div className="ing-cartegory">
                      <FontAwesomeIcon
                        icon={categoryIcon[ing.category]}
                        color="grey"
                      />
                    </div>
                    <div className="ing-name">{ing.name}</div>
                    <div
                      className="ing-msg"
                      style={{ backgroundColor: msgColor[ing.msg] }}
                    >
                      {ing.msg}
                    </div>
                  </div>
                );
              }
            })}
      </div>
      <div style={{ alignItems: "center" }}>
        <FontAwesomeIcon icon="caret-down" color="grey" size="2x" />
      </div>
    </div>
  );
};

export default FrozenSection;

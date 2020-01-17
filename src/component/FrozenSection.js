import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { categoryIcon, msgColor } from "../helper";
import { connect } from "react-redux";

const FrozenSection = props => {
  console.log("재고", props.stock);
  return (
    <div className="cold-container frozen-container">
      <span>냉동실</span>
      <div className="ingrediant-container-wrap">
        {!props.stock
          ? null
          : props.stock.map(ing => {
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
function mapStateToProps(state) {
  return {
    stock: state.stock.data
  };
}
export default connect(mapStateToProps, null)(FrozenSection);

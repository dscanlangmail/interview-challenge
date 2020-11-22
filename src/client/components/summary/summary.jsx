import React from "react";
import { useSelector } from "react-redux";
import { getItems } from "../../store/selectors";

const Summary = () => {
  const items = useSelector(getItems);

  const ve = items
    ? items.filter((item) => item.dietaries.includes("ve")).length
    : 0;
  const v = items
    ? items.filter((item) => item.dietaries.includes("v")).length
    : 0;
  const n = items
    ? items.filter((item) => item.dietaries.includes("n!")).length
    : 0;

  return (
    <div className="menu-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 menu-summary-left">
            <span>{items ? items.length : 0} items</span>
          </div>
          <div className="col-6 menu-summary-right">
            {ve}x <span className="dietary">ve</span>
            {v}x <span className="dietary">v</span>
            {n}x <span className="dietary">n!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;

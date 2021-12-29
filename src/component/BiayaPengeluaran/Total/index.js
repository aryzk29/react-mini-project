import React from "react";

import "./index.css";

const Total = (props) => {
  return (
    <div>
      <h2 id="total">
        Rp {props.totalPengeluaran.reduce((sum, items) => sum + items.price, 0)}
      </h2>
    </div>
  );
};

export default Total;

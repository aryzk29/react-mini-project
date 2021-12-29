import React from "react";

import Card from "../../Card";
import "./index.css";

const Item = (props) => {
  return (
    <li>
      <Card className="item">
        <div className="item-description">
          <h2>{props.item}</h2>
          <div className="item-price">Rp {props.price}</div>
        </div>
      </Card>
    </li>
  );
};

export default Item;

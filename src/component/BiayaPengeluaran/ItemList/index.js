import React from "react";

import Item from "../Item";
import "./index.css";

const ItemList = (props) => {
  return (
    <ul className="list">
      {props.items.map((data) => (
        <Item item={data.item} price={data.price} />
      ))}
    </ul>
  );
};

export default ItemList;

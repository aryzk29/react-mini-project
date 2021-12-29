import React from "react";

import Total from "./Total";
import ItemList from "./ItemList";
import Card from "../Card";
import "./index.css";

const BiayaPengeluaran = (props) => {
  return (
    <div>
      <h1>List Pengeluaran</h1>
      <Card className="style1">
        <ItemList items={props.itemsPrices} />
        <Total totalPengeluaran={props.itemsPrices} />
      </Card>
    </div>
  );
};

export default BiayaPengeluaran;

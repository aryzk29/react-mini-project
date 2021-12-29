import React, { useState } from "react";

import BiayaPengeluaran from "./component/BiayaPengeluaran";
import InputItem from "./component/InputItem";

const listPengeluaran = [
  {
    item: "Mouse",
    price: 400000,
  },
  {
    item: "Keyboard",
    price: 900000,
  },
];

const App = () => {
  const [pengeluaran, setPengeluaran] = useState(listPengeluaran);

  const addItemHandler = (item) => {
    setPengeluaran((prevItems) => {
      return [item, ...prevItems];
    });
  };

  return (
    <div>
      <BiayaPengeluaran itemsPrices={pengeluaran} />
      <InputItem onAddItem={addItemHandler} />
    </div>
  );
};

export default App;

import React, { useState } from "react";

import "./index.css";

const InputForm = (props) => {
  const [enteredItem, setEnteredItem] = useState("");
  const [enteredPrice, setEnteredPrice] = useState(0);

  const itemChangeHandler = (event) => {
    setEnteredItem(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      item: enteredItem,
      price: parseInt(enteredPrice),
    };

    props.saveData(data);
    setEnteredItem("");
    setEnteredPrice(0);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Item Name</label>
          <input type="text" value={enteredItem} onChange={itemChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="10000"
            step="5000"
            value={enteredPrice}
            onChange={priceChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default InputForm;

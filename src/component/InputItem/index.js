import React, { useState } from "react";

import InputForm from "./InputForm";
import "./index.css";

const InputItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveDataHandler = (enteredData) => {
    const data = {
      ...enteredData,
    };
    props.onAddItem(data);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Tambah Pengeluaran</button>
      )}
      {isEditing && (
        <InputForm saveData={saveDataHandler} onCancel={stopEditingHandler} />
      )}
    </div>
  );
};

export default InputItem;

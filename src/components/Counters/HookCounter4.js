import React, { useState } from "react";

const HookCounter4 = () => {
  // State ReferenceType
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div
      className="Box Hook"
      style={{
        borderColor: "gray",
      }}
    >
      <button onClick={addItem}>Add a number</button>
      <button onClick={() => setItems([])}>Clear List</button>
      {items.length ? (
        <ul className="Box" style={{ paddingLeft: "2rem" }}>
          {items.map((item) => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      ) : (
        <div className="Box" style={{ color: "red", padding: "1rem" }}>
          List is empty!
        </div>
      )}
    </div>
  );
};

export default HookCounter4;

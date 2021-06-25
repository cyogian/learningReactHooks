import React from "react";
import ComponentD from "./ComponentD";

const ComponentB = () => {
  return (
    <div className="Box Hook" style={{ borderColor: "indigo" }}>
      ↓
      <br />
      Component B
      <br />
      ↓
      <br />
      <ComponentD />
    </div>
  );
};

export default ComponentB;

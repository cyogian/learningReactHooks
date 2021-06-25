import React from "react";
import ComponentE from "./ComponentE";

const ComponentC = () => {
  return (
    <div className="Box Hook" style={{ borderColor: "khaki" }}>
      ↓
      <br />
      Component C
      <br />
      ↓
      <br />
      <ComponentE />
    </div>
  );
};

export default ComponentC;

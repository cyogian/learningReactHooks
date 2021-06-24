import React, { useState } from "react";
import HookMouse from "./HookMouse";

const MouseContainer = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div
      className="Box Hook"
      style={{
        border: "2px solid brown",
      }}
    >
      <button onClick={() => setDisplay((prevDisplay) => !prevDisplay)}>
        Toggle Display
      </button>
      {display ? <HookMouse /> : null}
    </div>
  );
};

export default MouseContainer;

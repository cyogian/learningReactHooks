import React, { useState } from "react";

const HookCounter = () => {
  // State ValueType
  const [count, setCount] = useState(0);
  return (
    <div
      className="Box Hook"
      style={{
        borderColor: "dodgerblue",
      }}
    >
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count: {count}
      </button>
    </div>
  );
};

export default HookCounter;

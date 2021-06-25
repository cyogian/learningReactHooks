import React, { useState } from "react";

const HookCounter2 = () => {
  // state ValueType
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return (
    <div
      className="Box Hook"
      style={{
        borderColor: "crimson",
      }}
    >
      <button
        onClick={() => setCount((prevCount) => prevCount - 5)}
        disabled={count < 5}
      >
        -5
      </button>
      <button
        onClick={() => setCount((prevCount) => prevCount - 1)}
        disabled={count < 1}
      >
        -
      </button>
      <button onClick={() => setCount(initialCount)}>
        Reset{"\n"}Count {count}
      </button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <button onClick={() => setCount((prevCount) => prevCount + 5)}>+5</button>
    </div>
  );
};

export default HookCounter2;

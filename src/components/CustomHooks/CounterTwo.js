import React from "react";
import useCounter from "../../hooks/useCounter";

const CounterOne = () => {
  const [count, increment, decrement, reset, by, initialCount] = useCounter();
  return (
    <div className="Box Hook" style={{ borderColor: "lemonchiffon" }}>
      <hr />
      Count - {count}
      <hr />
      <button onClick={decrement} disabled={count <= initialCount}>
        Decrement by {by}
      </button>
      <button onClick={increment}>Increment by {by}</button>
      <button onClick={reset}>Reset to {initialCount}</button>
    </div>
  );
};

export default CounterOne;

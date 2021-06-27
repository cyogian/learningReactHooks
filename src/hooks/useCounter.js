import { useState } from "react";

const useCounter = (by = 1, initialCount = 0) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    setCount((prevCount) => prevCount + by);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - by);
  };
  const reset = () => {
    setCount(initialCount);
  };

  return [count, increment, decrement, reset, by, initialCount];
};

export default useCounter;

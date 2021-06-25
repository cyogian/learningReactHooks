import React, { useEffect, useState } from "react";

const IntervalHookCounter = () => {
  // State ValueType
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div
      className="Box Hook"
      style={{
        borderColor: "yellow",
      }}
    >
      Count: {count}
    </div>
  );
};

export default IntervalHookCounter;

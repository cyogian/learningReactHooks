import React, { useMemo, useState } from "react";

const Counter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };
  // Inefficient function that gets called on every render
  // const isEven = () => {
  //   let i = 0;
  //   while (i < 2000000000) i++;
  //   return counterOne % 2 === 0;
  // };

  // Optimal Memoized Function returned Value that changes when Function reruns.
  // Function reruns only when one of the dependencies changes.
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div className="Box Hook">
      <div className="Box" style={{ borderColor: "firebrick" }}>
        <button onClick={incrementOne}>Counter One - {counterOne}</button>
        {isEven ? " { Even }" : " { Odd }"}
      </div>
      <div className="Box" style={{ borderColor: "fuchsia" }}>
        <button onClick={incrementTwo}>Counter Two - {counterTwo}</button>
      </div>
    </div>
  );
};

export default Counter;

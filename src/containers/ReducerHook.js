import React, { useEffect } from "react";
import CounterOne from "../components/Reducer/CounterOne";
import CounterThree from "../components/Reducer/CounterThree";
import CounterTwo from "../components/Reducer/CounterTwo";

const ReducerHook = () => {
  useEffect(() => {
    document.title = "Reducer Hook - Learning React Hooks";
  });
  return (
    <div>
      <CounterOne />
      <CounterTwo />
      <CounterThree />
    </div>
  );
};

export default ReducerHook;

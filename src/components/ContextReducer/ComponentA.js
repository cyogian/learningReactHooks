import React, { useContext } from "react";
import { CountContext } from "./Context";
import actionTypes from "./actionTypes";

const ComponentA = () => {
  const countContext = useContext(CountContext);
  return (
    <div className="Box Hook" style={{ borderColor: "indianred" }}>
      ↓
      <br />
      Component A ⇝ {countContext.countState}
      <hr />
      <button
        onClick={() => countContext.countDispatch(actionTypes.decrement)}
        disabled={countContext.countState === 0}
      >
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch(actionTypes.increment)}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch(actionTypes.reset)}>
        Reset
      </button>
    </div>
  );
};

export default ComponentA;

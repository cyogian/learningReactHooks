import React, { useReducer } from "react";
import ComponentA from "../components/ContextReducer/ComponentA";
import ComponentB from "../components/ContextReducer/ComponentB";
import ComponentC from "../components/ContextReducer/ComponentC";
import { CountContext } from "../components/ContextReducer/Context";
import actionTypes from "../components/ContextReducer/actionTypes";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case actionTypes.increment:
      return state + 1;
    case actionTypes.decrement:
      return state - 1;
    case actionTypes.reset:
      return initialState;
    default:
      return state;
  }
};

const ContextReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div>
        Count = {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
};

export default ContextReducer;

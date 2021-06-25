import React, { useReducer } from "react";

const initialState = 0;
const actionTypes = {
  increment: "INCREMENT",
  decrement: "DECREMENT",
  reset: "RESET",
};
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

const CounterThree = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div
      id="CounterThree"
      className="Box Hook"
      style={{ borderColor: "hotpink" }}
    >
      FirstCount = {count}
      <hr />
      <button
        onClick={() => dispatch(actionTypes.decrement)}
        disabled={count === 0}
      >
        Decrement
      </button>
      <button onClick={() => dispatch(actionTypes.increment)}>Increment</button>
      <button onClick={() => dispatch(actionTypes.reset)}>Reset</button>
      <hr />
      SecondCount = {countTwo}
      <hr />
      <button
        onClick={() => dispatchTwo(actionTypes.decrement)}
        disabled={countTwo === 0}
      >
        Decrement
      </button>
      <button onClick={() => dispatchTwo(actionTypes.increment)}>
        Increment
      </button>
      <button onClick={() => dispatchTwo(actionTypes.reset)}>Reset</button>
    </div>
  );
};

export default CounterThree;

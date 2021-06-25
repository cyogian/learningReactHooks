import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const actionTypes = {
  increment: "INCREMENT",
  decrement: "DECREMENT",
  increment2: "INCREMENT_2ND",
  decrement2: "DECREMENT_2ND",
  reset: "RESET",
};
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.increment:
      return { ...state, firstCounter: state.firstCounter + action.value };
    case actionTypes.decrement:
      return { ...state, firstCounter: state.firstCounter - action.value };
    case actionTypes.increment2:
      return { ...state, secondCounter: state.secondCounter + action.value };
    case actionTypes.decrement2:
      return { ...state, secondCounter: state.secondCounter - action.value };
    case actionTypes.reset:
      return initialState;
    default:
      return state;
  }
};

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div id="CounterTwo" className="Box Hook" style={{ borderColor: "gold" }}>
      FirstCount = {count.firstCounter} (minimum 0)
      <hr />
      <button
        onClick={() => dispatch({ type: actionTypes.decrement, value: 1 })}
        disabled={count.firstCounter < 1}
      >
        Decrement by 1
      </button>
      <button
        onClick={() => dispatch({ type: actionTypes.increment, value: 1 })}
      >
        Increment by 1
      </button>
      <button
        onClick={() => dispatch({ type: actionTypes.decrement, value: 5 })}
        disabled={count.firstCounter < 5}
      >
        Decrement by 5
      </button>
      <button
        onClick={() => dispatch({ type: actionTypes.increment, value: 5 })}
      >
        Increment by 5
      </button>
      <hr />
      SecondCount = {count.secondCounter} (minimum 10)
      <hr />
      <button
        onClick={() => dispatch({ type: actionTypes.decrement2, value: 1 })}
        disabled={count.secondCounter < 11}
      >
        Decrement by 1
      </button>
      <button
        onClick={() => dispatch({ type: actionTypes.increment2, value: 1 })}
      >
        Increment by 1
      </button>
      <button
        onClick={() => dispatch({ type: actionTypes.decrement2, value: 5 })}
        disabled={count.secondCounter < 15}
      >
        Decrement by 5
      </button>
      <button
        onClick={() => dispatch({ type: actionTypes.increment2, value: 5 })}
      >
        Increment by 5
      </button>
      <hr />
      <button onClick={() => dispatch({ type: actionTypes.reset })}>
        Reset
      </button>
    </div>
  );
};

export default CounterTwo;

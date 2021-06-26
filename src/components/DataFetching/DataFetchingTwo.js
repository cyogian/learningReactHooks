import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Oops, something went wrong!",
      };
    default:
      return state;
  }
};

const DataFetchingTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/a")
      .then((res) => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_ERROR",
        });
      });
  }, []);
  return (
    <div className="Box Hook">
      {state.loading ? "Loading Post..." : null}
      {state.error ? <p style={{ color: "red" }}>{state.error}</p> : null}
      {state.post &&
      Object.keys(state.post).length === 0 &&
      state.post.constructor === Object ? null : (
        <>
          <h4>#{state.post.id}</h4>
          <h2>{state.post.title}</h2>
          <p>{state.post.body}</p>
        </>
      )}
    </div>
  );
};

export default DataFetchingTwo;

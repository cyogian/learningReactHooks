import { useState } from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import ClassCounter1 from "./components/ClassCounter1";
import ClassMouse from "./components/ClassMouse";
import DataFetching from "./components/DataFetching";
import HookCounter from "./components/HookCounter";
import HookCounter2 from "./components/HookCounter2";
import HookCounter3 from "./components/HookCounter3";
import HookCounter4 from "./components/HookCounter4";
import HookCounter5 from "./components/HookCounter5";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import MouseContainer from "./components/MouseContainer";

function App() {
  const [showCounters, setShowCounters] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShowCounters((prevShow) => !prevShow)}>
        {showCounters ? "Hide" : "Show"} Counters
      </button>
      {showCounters ? (
        <>
          <ClassCounter />
          <HookCounter />
          <HookCounter2 />
          <HookCounter3 />
          <HookCounter4 />
          <ClassCounter1 />
          <HookCounter5 />
          <ClassMouse />
          <MouseContainer />
          <IntervalClassCounter />
          <IntervalHookCounter />
        </>
      ) : null}
      <DataFetching />
    </div>
  );
}

export default App;

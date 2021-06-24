import React from "react";

import ClassCounter from "../components/Counters/ClassCounter";
import ClassCounter1 from "../components/Counters/ClassCounter1";
import ClassMouse from "../components/Counters/ClassMouse";
import HookCounter from "../components/Counters/HookCounter";
import HookCounter2 from "../components/Counters/HookCounter2";
import HookCounter3 from "../components/Counters/HookCounter3";
import HookCounter4 from "../components/Counters/HookCounter4";
import HookCounter5 from "../components/Counters/HookCounter5";
import IntervalClassCounter from "../components/Counters/IntervalClassCounter";
import IntervalHookCounter from "../components/Counters/IntervalHookCounter";
import MouseContainer from "../components/Counters/MouseContainer";

const Counters = () => (
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
);

export default Counters;

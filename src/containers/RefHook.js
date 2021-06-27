import React, { useEffect } from "react";
import ClassTimer from "../components/Ref/ClassTimer";

import FocusInput from "../components/Ref/FocusInput";
import HookTimer from "../components/Ref/HookTimer";

const RefHook = () => {
  useEffect(() => {
    document.title = "Ref Hook - Learning React Hooks";
  }, []);

  return (
    <div>
      <h1>useRef Hook</h1>
      <FocusInput />
      <ClassTimer />
      <HookTimer />
    </div>
  );
};

export default RefHook;

import React, { useEffect } from "react";
import Counter from "../components/Memo/Counter";

const MemoHook = () => {
  useEffect(() => {
    document.title = "Memo Hook - Learning React Hooks";
  }, []);

  return (
    <div>
      <h1>useMemo Hook</h1>
      <Counter />
    </div>
  );
};

export default MemoHook;

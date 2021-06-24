import React from "react";
import ComponentC from "../components/Context/ComponentC";

const ContextHooks = () => {
  document.title = "Context Hooks - Learning React Hooks";
  return (
    <div>
      <h1>Context Hooks</h1>
      <ComponentC />
    </div>
  );
};

export default ContextHooks;

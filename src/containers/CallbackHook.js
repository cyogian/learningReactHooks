import React from "react";
import ParentComponent from "../components/Callback/ParentComponent";

const CallbackHook = () => {
  document.title = "Callback Hook - Learning React Hooks";
  return (
    <div>
      <ParentComponent />
    </div>
  );
};

export default CallbackHook;

import React from "react";
import CounterOne from "../components/CustomHooks/CounterOne";
import CounterTwo from "../components/CustomHooks/CounterTwo";
import DocTitleOne from "../components/CustomHooks/DocTitleOne";
import DocTitleTwo from "../components/CustomHooks/DocTitleTwo";
import UserForm from "../components/CustomHooks/UserForm";

const CustomHooks = () => {
  document.title = "Custom hooks - Learning React Hooks";
  return (
    <div>
      <h1>Custom Hooks</h1>
      <hr />
      <h2>useDocTitle Hook</h2>
      <hr />
      <DocTitleOne />
      <DocTitleTwo />
      <hr />
      <h2>useCounter Hook</h2>
      <hr />
      <CounterOne />
      <hr />
      <CounterTwo />
      <hr />
      <UserForm />
    </div>
  );
};

export default CustomHooks;

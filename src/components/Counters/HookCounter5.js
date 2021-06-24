import React, { useState, useEffect } from "react";

const HookCounter5 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    // componentDidMount + componentDidUpdate + Conditional
    console.log("useEffect - Updating document title");
    document.title = `Hook Clicked ${count} times - Learning React Hooks`;
  }, [count]);
  return (
    <div
      className="Box Hook"
      style={{
        border: "2px solid magenta",
      }}
    >
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount((count) => count + 1)}>
        Click {count} times
      </button>
    </div>
  );
};

export default HookCounter5;

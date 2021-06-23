import React, { useState, useEffect } from "react";

const HookMouse = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const logMousePosition = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  useEffect(() => {
    // Only componentDidMount
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log(
        "useEffect mimicks componentWillUnmount - removing mousemove EventListener"
      );
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div
      className="Box Hook"
      style={{
        border: "2px solid black",
      }}
    >
      X: {position.x}
      <hr />
      Y: {position.y}
    </div>
  );
};

export default HookMouse;

import React, { useEffect, useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    //   focus the input element
    inputRef.current.focus();
  }, []);
  return (
    <div className="Box Hook">
      <h3>Focus Input</h3>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default FocusInput;

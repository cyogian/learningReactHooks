import React, { useState } from "react";
import useDocumenTitle from "../../hooks/useDocumentTitle";

const DocTitleOne = () => {
  const [count, setCount] = useState(0);
  useDocumenTitle(count);
  return (
    <div className="Box Hook">
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count - {count}
      </button>
    </div>
  );
};

export default DocTitleOne;

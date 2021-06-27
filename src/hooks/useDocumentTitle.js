import { useEffect } from "react";

const useDocumenTitle = (count) => {
  useEffect(() => {
    document.title = `Count - ${count}`;
  }, [count]);
};

export default useDocumenTitle;

import React, { useEffect, useState } from "react";
import useDocTitle from "./useDocTitle";

function DocTitleTwo() {
  const [count, setCount] = useState(0);

  const DocTitleTwoChange = () => {
    setCount(count + 1);
  };

  useDocTitle(count);
  return (
    <>
      <button onClick={DocTitleTwoChange}>Count - {count}</button>
    </>
  );
}

export default DocTitleTwo;

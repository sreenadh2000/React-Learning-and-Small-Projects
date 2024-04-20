import React, { useEffect, useState } from "react";
import useDocTitle from "./useDocTitle";

function DocTitleOne() {
  const [count, setCount] = useState(0);

  const DocTitleOneChange = () => {
    setCount(count + 1);
  };
  useDocTitle(count);
  return (
    <>
      <button onClick={DocTitleOneChange}>Count - {count}</button>
    </>
  );
}

export default DocTitleOne;

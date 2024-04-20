import React from "react";
function ButtonCount({ clickHandle, children }) {
  console.log(`${children} Clicked`);
  return (
    <>
      <button onClick={clickHandle}>{children}</button>
    </>
  );
}
export default React.memo(ButtonCount);

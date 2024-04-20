import React from "react";
function Head() {
  console.log("Head Component");
  return <h1>Counter - </h1>;
}

export default React.memo(Head);

import React from "react";

const Hello = () => {
  return (
    <div>
      <h1>Hello this is example of JSX file</h1>
    </div>
  );
  // return React.createElement(
  //   "div",
  //   { id: "hello", className: "dummyClass" },
  //   React.createElement("h1", null, "Hello This is without JSX")
  // );
};
export default Hello;

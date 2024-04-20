import React, { useState } from "react";

export function UseState() {
  const [count, setCount] = useState(0);
  // setCount(count + 1);
  // const Update = () => {
  //   setCount(count + 1);
  // };
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

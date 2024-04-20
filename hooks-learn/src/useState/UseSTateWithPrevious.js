import React, { useState } from "react";

export default function UseStateWithPreviousState() {
  const [count, setCount] = useState(0);
  const IncrementFive = () => {
    for (let index = 0; index < 5; index++) {
      setCount((Prev) => Prev + 1);
    }
  };
  return (
    <div>
      <h2>Count {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={IncrementFive}>Increment 5</button>
    </div>
  );
}

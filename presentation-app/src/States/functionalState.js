import { useState } from "react";

export const FuncState = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h2>Count {count} times</h2>

      <button
        type="submit"
        onClick={() => {
          setCount(count + 2);
        }}
      >
        Click +2
      </button>
    </div>
  );
};

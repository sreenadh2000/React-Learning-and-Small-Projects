import { useState } from "react";

export const StateHook = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>This is State Hook Count {count} </h3>
      <button type="submit" onClick={() => setCount(count + 20)}>
        Click +20
      </button>
    </div>
  );
};
//  export default StateHook;

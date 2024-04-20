import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const reset = () => {
    setValue("");
  };

  const bind = {
    value: value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };

  return [value, bind, reset];
}

export default useInput;

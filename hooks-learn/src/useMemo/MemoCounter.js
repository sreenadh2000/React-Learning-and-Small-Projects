import React, { useMemo, useState } from "react";

function MemoCounter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const counterOneClicked = () => {
    setCounterOne(counterOne + 1);
  };

  const counterTwoClicked = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) {
      i++;
    }
    return counterOne % 2 === 0;
  }, [counterOne]);
  console.log(isEven);
  return (
    <div>
      <div>
        <button onClick={counterOneClicked}>counter one - {counterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={counterTwoClicked}>counter Two - {counterTwo}</button>
      </div>
    </div>
  );
}

export default MemoCounter;

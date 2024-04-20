import React from "react";
function InputCount({ name, age }) {
  console.log(`${name} changed`);
  return (
    <>
      <h4>
        {name} - {age}
      </h4>
    </>
  );
}

export default React.memo(InputCount);

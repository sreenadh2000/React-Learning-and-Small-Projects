import { useState } from "react";

import useInput from "./useInput";

function Form() {
  const [firstName, bindFirstName, resetFirstName] = useInput("Sree");
  const [lastName, bindLastName, resetLastName] = useInput("venkat");

  const SubmitHandle = (e) => {
    e.preventDefault();
    alert(`${firstName} and ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={SubmitHandle}>
        <div>
          <label>First Name</label>
          <input type="text" {...bindFirstName} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" {...bindLastName} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;

import { useState } from "react";

export default function InputPractice() {
  const [value, setValue] = useState({ userNAme: "", Salary: "" });
  ////////////////////////////////////////
  ///////// oNchange Events //////////////
  ////////////////////////////////////////

  ////////////////////////////////////////
  ///////// OnClick Buttons //////////////
  ////////////////////////////////////////

  ////////////////////////////////////////
  ///////// return Statement //////////////
  ////////////////////////////////////////
  return (
    <div>
      <label>User Name</label>
      <input
        value={value.userNAme}
        onChange={(e) => setValue({ ...value, userNAme: e.target.value })}
      />{" "}
      <br />
      <label>User Salary</label>
      <input
        value={value.Salary}
        onChange={(e) => setValue({ ...value, Salary: e.target.value })}
      />{" "}
      <br />
      <h1>
        {/* {value.userNAme} {value.Salary} */}
        {JSON.stringify(value)}
      </h1>
    </div>
  );
}

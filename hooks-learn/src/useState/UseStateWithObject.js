import { useState } from "react";

export default function UseStateWithObject() {
  const obj = {
    name: "sreenadh",
    age: 23,
    role: "ASE",
  };
  const [details, setDetails] = useState(obj);
  const CHangeDev = () => {
    setDetails(() => {
      return { ...details, role: "Software Developer" };
    });
  };
  return (
    <div>
      <h2>
        my name {details.name} i am a {details.age} years old and my role is{" "}
        {details.role}
      </h2>
      <h1>{JSON.stringify(details)}</h1>
      <button onClick={CHangeDev}>Change the role to Developer</button>
    </div>
  );
}

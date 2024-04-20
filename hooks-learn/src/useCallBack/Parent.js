import { useState, useCallback } from "react";
import Head from "./Head";
import InputCount from "./InputCount";
import ButtonCount from "./buttonCount";

export default function Parent(params) {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);
  const clickHandleAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const clickHandleSalary = useCallback(() => {
    setSalary(salary + 1);
  }, [salary]);
  return (
    <div>
      <Head />
      <InputCount name="Age" age={age} />
      <ButtonCount clickHandle={clickHandleAge}>Age Increment</ButtonCount>

      <InputCount name="Salary" age={salary} />
      <ButtonCount clickHandle={clickHandleSalary}>
        Salary Increment
      </ButtonCount>
    </div>
  );
}

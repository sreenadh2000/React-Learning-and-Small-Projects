import ChildInput from "./ChildInput";
import { useRef, useState, useEffect } from "react";
import "./Calc.css";

export default function SalaryCalc() {
  //////////////////////////////////////////////////////
  ///////////////////// useState ///////////////////////
  //////////////////////////////////////////////////////

  const [value, setValue] = useState({
    Salary: "",
    Tax: "",
    Pf: "",
    Hra: "",
    total: 0,
  });
  //////////////////////////////////////////////////////
  ///////////////////// useRef ///////////////////////
  //////////////////////////////////////////////////////
  const firstInputElement = useRef();
  /////////// useEffect- On First Rendering //////////////
  useEffect(() => {
    firstInputElement.current.focus();
  }, []);
  ////////////////////////////////////////
  ///////// oNchange Events //////////////
  ////////////////////////////////////////
  const SalaryChange = (e) => {
    setValue({ ...value, Salary: e.target.value });
  };
  const TaxChange = (e) => {
    setValue({ ...value, Tax: e.target.value });
  };
  const PfChange = (e) => {
    setValue({ ...value, Pf: e.target.value });
  };
  const HraChange = (e) => {
    setValue({ ...value, Hra: e.target.value });
  };
  ////////////////////////////////////////
  ///////// OnClick Buttons //////////////
  ////////////////////////////////////////
  const SubmitHandled = (e) => {
    let Total = value.Salary - value.Tax - value.Pf - value.Hra;
    setValue({ ...value, total: Total });
    e.preventDefault();
  };
  ////////////////////////////////////////
  ///////// return Statement //////////////
  ////////////////////////////////////////
  return (
    <div className="w-75 Salary shadow-lg p-3 mt-5 mx-auto bg-info-subtle rounded">
      <h2 className="w-50 mx-auto shadow-lg p-3 mb-5 bg-info text-white rounded">
        Salary Caculation
      </h2>
      {/* This is the User Salary div */}
      <form onSubmit={SubmitHandled} className="mt-5 p-5">
        <ChildInput
          lbName="Basic Pay"
          Ref={firstInputElement}
          name={value.Salary}
          eventHandled={SalaryChange}
        />
        <ChildInput lbName="Tax" name={value.Tax} eventHandled={TaxChange} />
        <ChildInput lbName="Pf" name={value.Pf} eventHandled={PfChange} />
        <ChildInput lbName="HRA" name={value.Hra} eventHandled={HraChange} />
        {/* Submit button */}
        <button type="submit" className="btn btn-primary btn-lg mt-2">
          Submit
        </button>{" "}
        <br />
        <h3 className="mt-4">
          Total Salary
          <span className="m-2 Total text-warning bg-dark">
            {value.total}
          </span>{" "}
        </h3>
        {/* <h1>
        
          {JSON.stringify(value)}
        </h1> */}
      </form>
    </div>
  );
}

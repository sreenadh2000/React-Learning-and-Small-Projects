import React, { useState } from "react";

function SalaryCalculate() {
  const [BaseSalary, setBaseSalary] = useState("");

  const [Hra, setHra] = useState("");

  const [Tax, setTax] = useState("");

  const [NetSal, setNetSal] = useState("");

  let taxSal = 0;
  /////////// On change Events //////////////////
  const basic = (event) => {
    setBaseSalary(event.target.value);
  };

  const houserent = (event) => {
    setHra(event.target.value);
  };
  //////////////////// Your Code ////////////
  // const nsal = (event) => {
  //   setNetSal(Number(BaseSalary) + Number(Hra));
  // };
  /////////////////// My code ////////////////////
  const nsal = Number(BaseSalary) + Number(Hra);
  const calculation = () => {
    alert(nsal);
    if (nsal > 50000) {
      taxSal = (nsal * 10) / 100;
    } else if (nsal > 30000) {
      taxSal = (nsal * 5) / 100;
    } else {
      taxSal = 0;
    }

    setTax(taxSal);
    let TotSal = nsal - taxSal;
    setNetSal(TotSal);
  };

  return (
    <div>
      <h2>Calculate salary</h2>

      <div>
        <label>Name</label>
        <input type="text" />
      </div>

      <div>
        <label>Basic Salary</label>
        <input onChange={basic} type="number" />
      </div>

      <div>
        <label>HRA</label>
        <input type="number" onChange={houserent} />
      </div>

      <div>
        <label>Tax</label>

        <input type="text" value={Tax} />
      </div>

      <div>
        <label>Net Salary</label>
        <input type="text" value={NetSal} />
      </div>

      <button type="submit" onClick={calculation}>
        Calculate salary
      </button>
    </div>
  );
}

export default SalaryCalculate;

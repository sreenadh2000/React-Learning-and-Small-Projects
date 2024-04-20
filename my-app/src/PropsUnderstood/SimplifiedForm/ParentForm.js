import { Component } from "react";
import InputChild from "./InputChild";

export default class FormParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "Sre",
      Age: "",
      Salary: "",
      Tax: "",
    };
  }
  ////////////////////////////////////////////////
  ////////////// On change Events ////////////////
  ////////////////////////////////////////////////
  NameChange = (e) => {
    this.setState({ Name: e.target.value });
  };
  AgeChange = (e) => {
    this.setState({ Age: e.target.value });
  };
  SalaryChange = (e) => {
    this.setState({ Salary: e.target.value });
  };
  TaxChange = (e) => {
    this.setState({ Tax: e.target.value });
  };
  /////////////////////////////////////////////////
  /////////////////// Render Method ///////////////
  //////////////////////////////////////////////////
  render() {
    const { Name, Age, Salary, Tax } = this.state;
    return (
      <div>
        <InputChild name="Name" eventChange={this.NameChange} />
        <InputChild name="Age" eventChange={this.AgeChange} />
        <InputChild name="Salary" eventChange={this.SalaryChange} />
        <InputChild name="Tax" eventChange={this.TaxChange} />
        <h2>
          {" "}
          Hi {Name} age is {Age} Salary is {Salary} Tax {Tax}
        </h2>
      </div>
    );
  }
}

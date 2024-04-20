import { Component } from "react";
import Total from "./Total";

export default class SubmitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Salary: 0,
      Tax: 0,
      Clicked: false,
    };
  }
  /////////////////////////////////////////////
  ///////////////// On Change events //////////
  /////////////////////////////////////////////
  SalaryChange = (e) => {
    this.setState({
      Salary: e.target.value,
    });
  };

  TaxChange = (e) => {
    this.setState({
      Tax: e.target.value,
    });
  };
  /////////////////////////////////////////////
  ///////////////// On Submit Event ///////////
  /////////////////////////////////////////////
  submitHandler = (e) => {
    this.setState({
      Clicked: true,
    });
    e.preventDefault();
  };
  /////////////////////////////////////////////
  ///////////////Render Method ///////////////
  ////////////////////////////////////////////
  render() {
    const { Salary, Tax, Clicked } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <label>Salary </label>
        <input type="number" value={Salary} onChange={this.SalaryChange} />
        <br />
        <label>Tax </label>
        <input type="number" value={Tax} onChange={this.TaxChange} />
        <br />
        <button type="submit">Submit</button>
        {Clicked && <Total sal={this.state.Salary} Tax={Tax} />}
      </form>
    );
  }
}

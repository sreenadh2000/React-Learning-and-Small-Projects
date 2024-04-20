import { Component } from "react";
import Total from "./Total";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Salary: 0,
      Pf: 0,
      Tax: 0,
      Total: 0,
      Sub: false,
    };
  }
  /////////////////////////////////////////////
  ///////////////// On Change events //////////
  /////////////////////////////////////////////
  SalaryChange = (e) => {
    // this.setState({
    //   Salary: e.target.value,
    //   Total: e.target.value,
    // });
    this.setState(
      () => ({
        Salary: e.target.value,
      }),
      () => this.setState({ Total: this.state.Salary })
    );
    //
    // this.setState({ Total: this.state.Salary});
  };
  // TaxChange = (e) => {
  //   this.setState({
  //     Tax: e.target.value,
  //     Total: this.state.Total - e.target.value,
  //   });
  // };
  TaxChange = (e) => {
    this.setState(
      () => ({
        Tax: e.target.value,
      }),
      () => this.setState({ Total: this.state.Salary - this.state.Tax })
    );
  };
  /////////////////////////////////////////////
  ///////////////// On Submit Event ///////////
  /////////////////////////////////////////////
  FormHandled = (e) => {
    this.setState({ Sub: true });
    e.preventDefault();
  };
  // onSubmit={this.FormHandled}
  /////////////////////////////////////////////
  ///////////////Render Method ///////////////
  ////////////////////////////////////////////
  render() {
    return (
      <form onSubmit={this.FormHandled}>
        <label>Salary </label>
        <input
          type="number"
          value={this.state.Salary}
          onChange={this.SalaryChange}
        />{" "}
        <br />
        <label>Tax </label>
        <input
          type="number"
          value={this.state.Tax}
          onChange={this.TaxChange}
        />{" "}
        <br />
        <button type="submit">Submit</button>
        {/* <h1>{this.state.Total}</h1> */}
        {this.state.Sub && <Total />}
      </form>
    );
  }
}

import { Component } from "react";
import "./Salary.css";
// import ListRender from "../ListRendering/ListRender";

export default class Salary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Salary: 0,
      Hra: 0,
      Tax: 0,
      Pf: 0,
      total: 0,
    };
  }

  /////////////////////////////////////////////////
  /////////////// OnChange Events /////////////////
  /////////////////////////////////////////////////
  SalaryHandled = (event) => {
    // return console.log(event.target);
    this.setState({ Salary: event.target.value });
    // this.CalcSalary(0);
    // alert(event.target.value);
  };
  TaxChange = (event) => {
    // return console.log(event);
    this.setState({ Tax: event.target.value });
    // this.CalcSalary(this.state.Tax);
  };
  HRAChange = (event) => {
    // return console.log(event);
    this.setState({ Hra: event.target.value });
    // this.CalcSalary(this.state.Hra);
  };
  PFChange = (event) => {
    // return console.log(event);
    this.setState({ Pf: event.target.value });
    // this.CalcSalary(this.state.Pf);
  };
  CalcSalary(ChangeValue) {
    alert(this.state.Salary);
    this.setState({ total: this.state.Salary - ChangeValue });
  }
  /////////////////////////////////////////////////
  /////////////// Submit Events /////////////////
  /////////////////////////////////////////////////

  SubmitHandled = (event) => {
    // {Salary,Tax,Hra,Pf} = this.state
    this.setState({
      total:
        this.state.Salary - this.state.Tax - this.state.Hra - this.state.Pf,
    });

    event.preventDefault();
  };
  /////////////////////////////////////////////////
  /////////////// render Statement bg-body-tertiary /////////////////
  /////////////////////////////////////////////////
  render() {
    return (
      <div className="Salary shadow-lg p-3 mb-5 bg-info-subtle rounded">
        <h2 className="shadow-lg p-3 mb-5 bg-info text-white rounded">
          Salary Caculation
        </h2>
        {/* This is the User Salary div */}
        <form onSubmit={this.SubmitHandled}>
          <div className="input-group input-group-lg Inside">
            <span
              className="bg-dark-subtle input-group-text"
              id="inputGroup-sizing-lg"
            >
              Basic Salary
            </span>
            <input
              type="number"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              value={this.state.Salary}
              onChange={this.SalaryHandled}
            />
          </div>
          {/* This is the PF div */}
          <div className="input-group input-group-lg Inside">
            <span
              className="bg-dark-subtle input-group-text"
              id="inputGroup-sizing-lg"
            >
              Pf
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              value={this.state.Pf}
              onChange={this.PFChange}
            />
          </div>
          {/* This is the Tax div */}
          <div className="input-group input-group-lg Inside">
            <span
              className="bg-dark-subtle input-group-text"
              id="inputGroup-sizing-lg"
            >
              Tax
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              value={this.state.Tax}
              onChange={this.TaxChange}
            />
          </div>
          {/* This is the HRA div */}
          <div className="input-group input-group-lg Inside">
            <span
              className="bg-dark-subtle input-group-text"
              id="inputGroup-sizing-lg"
            >
              Hra
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              value={this.state.Hra}
              onChange={this.HRAChange}
            />
          </div>
          {/* Submit button */}
          <button type="submit" className="btn btn-primary btn-lg">
            Submit
          </button>{" "}
          <br />
          <h3>
            Total Salary
            <span className="Total text-warning bg-dark">
              {this.state.total}
            </span>{" "}
          </h3>
        </form>
      </div>
      /////////////////////////////////////////////////
      /////////////// Working Statement /////////////////
      /////////////////////////////////////////////////
      // <form onSubmit={this.SubmitHandled}>
      //   <div>
      //     <label>User Salry </label>
      //     <input
      //       type="number"
      //       value={this.state.Salary}
      //       onChange={this.SalaryHandled}
      //       // onKeyUpCapture={this.SalaryHandled}
      //     />{" "}
      //     <br />
      //     <label> Tax </label>
      //     <input
      //       type="number"
      //       value={this.state.Tax}
      //       onChange={this.TaxChange}
      //     />{" "}
      //     <br />
      //     <label>HRA </label>
      //     <input
      //       type="number"
      //       value={this.state.Hra}
      //       onChange={this.HRAChange}
      //     />
      //     <br />
      //   </div>
      //   <label>PF </label>
      //   <input
      //     type="number"
      //     value={this.state.Pf}
      //     onChange={this.PFChange}
      //   />{" "}
      //   <br />
      //   <h3>Total Slary {this.state.total}</h3>
      //   {/* <input value={this.state.total} /> */}
      //   <button type="submit">Submit</button>
      // </form>
    );
  }
}

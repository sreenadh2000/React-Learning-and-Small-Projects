import { Component } from "react";

export default class Salary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salary: 22000,
    };
  }
  render() {
    return (
      <div>
        <input type="number" />
        <br />
        <button type="submit" onClick={() => this.Increment()}>
          Submit Salary
        </button>
      </div>
    );
  }
}

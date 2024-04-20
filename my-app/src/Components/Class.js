import React from "react";
import { Component } from "react";

class Sree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  ClickHAndled = () => {
    this.setState((this.count = this.state.count + 1));
  };

  render() {
    return (
      <div>
        <h2>This is Class Component</h2>
        <button onClick={this.ClickHAndled}>
          CLick {this.state.count} times
        </button>
      </div>
    );
  }
}

export default Sree;

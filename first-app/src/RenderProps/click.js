import { Component } from "react";

export default class Click extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementCounter = () => {
    this.setState((previousState) => {
      return {
        count: previousState.count + 1,
      };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.incrementCounter}>
          Click {this.state.count}
        </button>
      </div>
    );
  }
}

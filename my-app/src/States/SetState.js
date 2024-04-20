import { Component } from "react";

export default class SetState extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  /// Single Digit Increment

  Increment() {
    this.setState(
      {
        counter: this.state.counter + 1,
      },
      () => console.log(this.state.counter)
    );
    // this.setState(
    //   (previousState) => ({
    //     counter: previousState.counter + 1,
    //   }),
    //   () => console.log(this.state.counter)
    // );
  }

  /// Five digit Increment
  IncrementFive() {
    this.Increment();
    this.Increment();
    this.Increment();
    this.Increment();
    this.Increment();
  }
  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <button onClick={() => this.IncrementFive()}>Increment</button>
        {/* <button onClick={this.Increment}>Increment</button> */}
      </div>
    );
  }
}

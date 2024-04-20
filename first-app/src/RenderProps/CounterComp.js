import { Component } from "react";

export default class CounterComp extends Component {
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
      <div>{this.props.render(this.state.count, this.incrementCounter)}</div>
    );
  }
}

import { Component } from "react";

export default class Child extends Component {
  render() {
    const { name, age, childMethod } = this.props;
    let ChildValue = "Child Info 30";
    return (
      <button onClick={() => childMethod(ChildValue)}>
        Hello {name} and {age}
      </button>
    );
  }
}

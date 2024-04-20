import { Component } from "react";

export default class HoverCounter extends Component {
  render() {
    let { count, incrementCount } = this.props;
    return <h2 onMouseOver={incrementCount}>Hover {count} times</h2>;
  }
}

import { Component } from "react";

export default class Total extends Component {
  render() {
    const { sal, Tax } = this.props;
    return <h1>Total {sal - Tax}</h1>;
  }
}

import { Component } from "react";

export default class ChildInput extends Component {
  render() {
    const { lbName } = this.props;
    return (
      <>
        <label>Enter {lbName} </label>
        <input type="text" onChange={this.props.Handler} />
      </>
    );
  }
}

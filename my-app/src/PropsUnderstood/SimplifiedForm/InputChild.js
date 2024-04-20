import { Component } from "react";

export default class InputChild extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name } = this.props;
    return (
      <div>
        <label>{name} </label>
        <input type="text" onChange={this.props.eventChange} />
      </div>
    );
  }
}

import { Component } from "react";
import ChildInput from "./ChildInput";

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  NameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>Class Props</h1>
        <ChildInput lbName="Name" Handler={this.NameChange} />
        <h6>This is Coming from Child Component {this.state.name}</h6>
      </div>
    );
  }
}

import { Component } from "react";
import Child from "./ChildFunction";

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Parent: "parent Class",
    };
    this.EventHandle = this.EventHandle.bind(this);
  }
  /////////////////////////////////////////
  //////////////// Normal Call ////////////
  ////////////////////////////////////////
  EventHandle() {
    alert(`Hello ${this.state.Parent}`);
  }
  //////////////////////////////////////////////////////
  //////////////// Argument from child Call ////////////
  //////////////////////////////////////////////////////
  // EventHandle(childArgue) {
  //   alert(`Hello ${this.state.Parent} from ${childArgue}`);
  // }
  render() {
    return (
      <div>
        <Child eventHandle={this.EventHandle} />
      </div>
    );
  }
}

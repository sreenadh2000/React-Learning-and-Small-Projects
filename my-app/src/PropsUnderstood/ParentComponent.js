import { Component } from "react";
import Child from "./ChildComponent";

export default class Parent extends Component {
  ParentMethod = (ChildInfo) => {
    // alert(`Hello this is Child Info ${ChildInfo}`);
    return { ChildInfo };
  };
  render() {
    return (
      <div>
        <Child name="sreenadh" age="23" childMethod={this.ParentMethod} />
      </div>
    );
  }
}

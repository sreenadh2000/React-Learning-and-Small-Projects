import React, { Component } from "react";
import ComponentB from "./ComponentB";

// const UserContext = React.useContext()
export default class ComponentA extends Component {
  render() {
    return (
      <div>
        <ComponentB />
      </div>
    );
  }
}

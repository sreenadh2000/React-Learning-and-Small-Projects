import React, { Component } from "react";
import { dataContext } from "./compoinent1";

export default class Component2 extends Component {
  render() {
    return (
      <dataContext.Consumer>
        {(value) => {
          return <h1>{value}</h1>;
        }}
      </dataContext.Consumer>
    );
  }
}

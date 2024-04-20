import React, { Component } from "react";
import Component2 from "./component2";
export const dataContext = React.createContext();

export default class Component1 extends Component {
  render() {
    return (
      <dataContext.Provider value="Sreenadh">
        <Component2 />
      </dataContext.Provider>
    );
  }
}

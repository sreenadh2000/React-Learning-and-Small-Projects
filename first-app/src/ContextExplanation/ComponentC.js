import { Component } from "react";
import { userContext } from "../App";
class ComponentC extends Component {
  render() {
    return (
      <userContext.Consumer>
        {(value) => {
          return <h1>{value}</h1>;
        }}
      </userContext.Consumer>
    );
  }
}

export default ComponentC;

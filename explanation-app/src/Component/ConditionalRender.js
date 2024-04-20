import { Component } from "react";

const Condition = false;
class ConditionalRender extends Component {
  render() {
    // if (Condition) {
    //   return <h1>True Condition</h1>;
    // } else {
    //   return <h1>False Condition</h1>;
    // }
    // Condition ? true : false"
    return <h1>{Condition ? "True Condition" : "False Condition"}</h1>;
  }
}

export default ConditionalRender;

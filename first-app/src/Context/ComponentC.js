import { Component } from "react";
import { UserConsumer } from "./UserContext";

export default class ComponentC extends Component {
  render() {
    return <UserConsumer>{(name) => <h1>Hello {name}</h1>}</UserConsumer>;
  }
}
/////// //////////////////////////////////////////////////////
// static contextType = UserContext;
// return (
//   <UserConsumer>
//     <h1>{this.context}</h1>
//   </UserConsumer>
// );

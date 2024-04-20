import { Component } from "react";
export default class ElementVariable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    let message;
    if (this.state.isLoggedIn) {
      message = "Welcome Sree";
    } else {
      message = "not Subscribed";
    }
    return (
      <div>
        <h1>{message}</h1>
      </div>
    );
  }
}

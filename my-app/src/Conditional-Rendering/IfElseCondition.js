import { Component } from "react";

export default class IfElse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    if (this.state.isLoggedIn) {
      return (
        <div>
          <h1>Welcome Sreenadh</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Sorry Not Logged</h1>
        </div>
      );
    }
  }
}

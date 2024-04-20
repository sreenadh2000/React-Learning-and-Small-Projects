import { Component } from "react";

export default class Conditional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    ////////////////////////// ternatory Operator //////////////////////
    // return this.state.isLoggedIn ? (
    //   <div>
    //     <h2>Welcome Sree</h2>
    //   </div>
    // ) : (
    //   <div>
    //     <h2>not Logged</h2>
    //   </div>
    // );
    //////////////////////// Short Circuited Operator///////////////////
    return (
      this.state.isLoggedIn && (
        <div>
          <h1>hello</h1>
        </div>
      )
    );
  }
}

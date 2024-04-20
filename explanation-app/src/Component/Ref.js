import React, { Component } from "react";

class Ref extends Component {
  constructor(props) {
    super(props);
    this.CallRef = React.createRef();
  }
  componentDidMount() {
    // console.log(this.CallRef.current.value);
    this.CallRef.current.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.CallRef} value="Sreenadh" />
        <h1>{this.CallRef.current.value}</h1>
      </div>
    );
  }
}

export default Ref;

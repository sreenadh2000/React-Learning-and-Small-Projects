import React, { Component } from "react";

export default class InputComp extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  InputFocus() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

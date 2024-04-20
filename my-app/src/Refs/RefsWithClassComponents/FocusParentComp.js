import React, { Component } from "react";
import InputComp from "./InputComponent";

export default class FocusParentComp extends Component {
  constructor(props) {
    super(props);
    this.FocusRef = React.createRef();
  }
  clickHandled = () => {
    this.FocusRef.current.InputFocus();
    console.log(this.FocusRef);
  };

  render() {
    return (
      <div>
        <InputComp ref={this.FocusRef} />
        <button type="submit" onClick={this.clickHandled}>
          Focus Button
        </button>
      </div>
    );
  }
}

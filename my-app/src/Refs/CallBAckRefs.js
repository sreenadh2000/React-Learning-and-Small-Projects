import { Component } from "react";

export default class CallBackRefs extends Component {
  constructor(props) {
    super(props);
    this.callBackRef = null;
    this.setCallBackRef = (element) => {
      this.callBackRef = element;
    };
  }
  componentDidMount() {
    console.log(this.callBackRef);
    this.callBackRef.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.setCallBackRef} />
      </div>
    );
  }
}

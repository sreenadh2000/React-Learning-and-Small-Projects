import React from "react";
import { Wave, Random } from "react-animated-text";

const exampleStyle = {
  display: "inline-block",
  border: "1px solid #ccc",
  marginBottom: "1em",
  padding: "2em 1em 1em 1em",
  width: "80%",
  fontSize: "1.5rem",
};

const codeDivStyle = {
  backgroundColor: "#eee",
  marginTop: "2em",
  padding: "1px 1em",
  overflow: "scroll",
  fontSize: "1rem",
};

const codeStyle = {
  textAlign: "left",
};

const buttonStyle = {
  cursor: "pointer",
  backgroundColor: "#69c",
  border: "none",
  color: "white",
  appearance: "none",
  boxShadow: "none",
  borderRadius: 0,
  fontSize: "1.0rem",
  padding: "0.2em 2em",
};

export class WaveText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { paused: true, randomNumber: this.randomNumber() };
    this.togglePause = this.togglePause.bind(this);
  }

  randomNumber() {
    return Math.round(
      Math.random() * (1000000000 - 100000000) + 100000000
    ).toString();
  }

  togglePause() {
    this.setState((prevState) => ({
      paused: !prevState.paused,
      randomNumber: this.randomNumber(),
    }));
  }

  render() {
    return (
      <div style={exampleStyle}>
        <Random
          text={this.state.randomNumber}
          paused={this.state.paused}
          iterations={1}
          effect="verticalFadeIn"
          effectChange={2}
          effectDirection="up"
        />
        <br />
        <button style={buttonStyle} onClick={this.togglePause}>
          {this.state.paused ? "Generate Random Number" : "Reset"}
        </button>

        {/* <div style={codeDivStyle}>
          <pre style={codeStyle}>
            &lt;Random
            <br />
            &nbsp;&nbsp;text=&#123;this.state.randomNumber{"}"}
            <br />
            &nbsp;&nbsp;paused=&#123;this.state.paused{"}"}
            <br />
            &nbsp;&nbsp;iterations={1}
            <br />
            &nbsp;&nbsp;effect="verticalFadeIn"
            <br />
            &nbsp;&nbsp;effectChange=&#123;2{"}"}
            <br />
            &nbsp;&nbsp;effectDirection="up"
            <br />/{">"}
          </pre>
        </div> */}
      </div>
    );
  }
}

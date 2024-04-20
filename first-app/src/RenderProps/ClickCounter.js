import { Component } from "react";

class ClickCOunter extends Component {
  render() {
    let { count, incrementCount } = this.props;
    return (
      <button type="submit" onClick={incrementCount}>
        Click {count} times
      </button>
    );
  }
}

export default ClickCOunter;

const { Component } = require("react");

export default class CountyState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <h1> Count {this.state.count} times</h1>
        <button type="submit" onClick={this.handleClick}>
          Click +1
        </button>
      </div>
    );
  }
}

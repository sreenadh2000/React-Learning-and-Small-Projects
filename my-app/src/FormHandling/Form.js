import { Component } from "react";
import ListRender from "../ListRendering/ListRender";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      LoggedIn: false,
    };
  }

  NameHandled = (event) => {
    // return console.log(event);
    this.setState({ name: event.target.value });
  };
  SubmitHandled = (event) => {
    return alert(`Wecome ${this.state.name}`);
  };

  render() {
    return (
      <form onSubmit={this.SubmitHandled}>
        <div>
          <label>User Name </label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.NameHandled}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

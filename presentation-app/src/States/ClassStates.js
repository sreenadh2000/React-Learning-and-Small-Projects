import React, { Component } from "react";

export default class ClassStates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ["kolkatha", "mumbai", "delhi"],
    };
    // this.props.name = "Welcome";
    // this.state = {
    //   count: "hi",
    // };
    // this.setState({
    //   count: this.state.count + "sree",
    // });
  }

  handleClick = () => {
    // console.log(this);
    // this.setState({
    //   count: this.state.count + 1,
    // });
    // this.setState(
    //   (prev) => ({
    //     // count: this.state.count + 1,
    //     count: prev.count + 1,
    //   }),
    //   () => {
    //     console.log(this.state.count);
    //   }
    // );
  };

  render() {
    // function test(user) {
    //   return user.name;
    // }
    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h4", null, "Hi"),
    //   React.createElement("h4", null, "welcome"),
    //   "Guest"
    // );
    // const user = { name: "Sree" };
    setTimeout(() => {
      this.setState({ city: "Banglore" });
    }, 2000);
    return (
      <div>
        <section>
          {this.state.city.map(function (cityName) {
            return <li key={cityName}>{cityName}</li>;
          })}
        </section>
        {/* <h1>Counter {this.state.count} times</h1> */}
        {/* <h1>this.props.name</h1>
        <button type="submit" onClick={this.handleClick}>
          Click +1
        </button> */}
        {/* <div>
          <h1>{test(user)}</h1>
        </div> */}
      </div>
    );
  }
}

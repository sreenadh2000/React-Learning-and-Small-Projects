import { Component } from "react";

export default class State extends Component {
  constructor() {
    super();
    this.state = {
      toggleDisplay: false,
    };
    // console.log(this);
    // this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  }
  // toggleDisplayBio() {
  //   this.setState({
  //     toggleDisplay: !this.state.toggleDisplay,
  //   });
  // }
  toggleDisplayBio = () => {
    console.log(this);
    this.setState({
      toggleDisplay: !this.state.toggleDisplay,
    });
  };
  render() {
    return (
      <div>
        <h1>Wikipedia</h1>
        {this.state.toggleDisplay ? (
          <div>
            <p>
              <h4>
                lorem ytdchgcg ctdtudgcnbcdtudgc gtuyjdgxf cvrtuoj e6r7uikfhg
                5e6ryifhjgf rertugjhfhg esrdtfygiuhig frtyiugkhv igukvh
                sertyuijhg yfujhghjv fgxyfgchfyf.
              </h4>
            </p>
            <button onClick={this.toggleDisplayBio}>Show Less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read More</button>
          </div>
        )}
      </div>
    );
  }
}

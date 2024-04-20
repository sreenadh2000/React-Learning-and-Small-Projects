import { Component } from "react";
import HocComp from "./HoC_Comp";
class HoverComp extends Component {
  render() {
    return (
      <div>
        <h1>Hover 0 Count</h1>
      </div>
    );
  }
}

export default HocComp(HoverComp);

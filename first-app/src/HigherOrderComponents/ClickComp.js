import { Component } from "react";
//

class ClickComp extends Component {
  render() {
    return (
      <div>
        <button type="submit">Click 0 Count</button>
      </div>
    );
  }
}
export default HocComp(ClickComp);

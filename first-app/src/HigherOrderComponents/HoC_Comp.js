import React, { Component } from "react";

const HoCComp = (OriginalComp) => {
  class NewHoC extends Component {
    render() {
      return (
        <div>
          <OriginalComp />
        </div>
      );
    }
  }
  return NewHoC;
};

export default HoCComp;

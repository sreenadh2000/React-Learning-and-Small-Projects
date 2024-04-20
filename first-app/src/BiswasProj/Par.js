import React from "react";
// import Page from "./component/Page";
import Data from "../test.json";
import Page from "./Page";
import "./Page.css";

const boxStyle = {
  border: "1px solid #dadada",
  float: "left",
  borderRadius: "12px",
  padding: "16px",
  margin: "24px 0 0 24px",
};

export default function Par() {
  let items = [];
  // console.log(Data);
  for (let x = 0; x < Data.length; x++) {
    items.push(
      ///// Multiple times rendering the Page Component so we have to provide the Key Value for Each item ///////////////
      <Page key={x} titleText={Data[x].name} descText={Data[x].age} />
    );
  }
  console.log(items);
  return <div style={boxStyle}>{items}</div>;
}

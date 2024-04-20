import React, { useState } from "react";
import userContext from "./Context";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

export default function Parent() {
 // const [name, setName] = useState("Sreenadh");
  return (
    <>
    <userContext.Provider value="Sreenadh">
      <h1>This is Parent Component</h1>
      <ComponentA />
    </userContext.Provider>
    {/* <ComponentB /> */}
    </>
  );
}

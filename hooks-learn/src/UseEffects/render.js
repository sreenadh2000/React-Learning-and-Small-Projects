import React, { useState, useEffect } from "react";
export default function Renders() {
  const [count, setCount] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleSize = () => {
    setWindowWidth(window.innerWidth);
  };
  ////////////////////////////////////////////////
  /////// Every Render Excute /  ///////////////////
  ////////// Runs on first render ///////////////
  ////////////////////////////////////////////////
  /////////////////////// mounting State /////////////////////////////
  useEffect(() => {
    console.log("Called the Component");
  }, []);

  /////////////////////// UpdateMounting //////////////

  useEffect(() => {
    console.log("Called the Component");
  }, [count]);
  /////////////////////// UnMounting //////////////
  useEffect(() => {
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <div>
      <h1>I have rendered {count} times.</h1>
      <h1>Window with is {windowWidth}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* <h1>I have rendered times.</h1> */}
    </div>
  );
}

/////////////////////////////////////////////////////////////////
/////// first Render Only */* Component Mount ///////////////////
////////////// Runs only on the first render //////////////////
/////////////////////////////////////////////////////////////////

// useEffect(() => {
//   setTimeout(() => {
//     setCount((count) => count + 1);
//   }, 1000);
// });

// useEffect(() => {
//   setTimeout(() => {
//     SetVal((val) => val + 1);
//   }, 1000);
// }, [val]);

/////////////////////////////////////////////////////////////////
/////// first Render Only */* Component Mount ///////////////////
////////////// Runs only on the first render //////////////////
/////////////////////////////////////////////////////////////////
// useEffect(() => {
//   let timer = setTimeout(() => {
//     setCount((count) => count + 1);
//   }, 1000);

//   return () => clearTimeout(timer);
// }, []);

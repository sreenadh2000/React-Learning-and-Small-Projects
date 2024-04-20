import React from "react";
import "./App.css";
import ComponentA from "./ContextExplanation/ComponentA";

///////////////// Creating context /////////////////////
export const userContext = React.createContext();

function App() {
  return (
    <div className="App">
      <userContext.Provider value="Vivek">
        <ComponentA />
      </userContext.Provider>
    </div>
  );
}

export default App;

//  {/* <Par /> */}

//     {/* <Component1 /> */}

//     {/* <UserProvider value="Sreenadh">
//       <ComponentA />
//     </UserProvider> */}

//     {/* <CLick /> */}
//     {/* <CounterComp
//       render={(count, incrementCounter) => {
//         return (
//           <ClickCounter count={count} incrementCount={incrementCounter} />
//         );
//       }}
//     />
//     <CounterComp
//       render={(count, incrementCounter) => (
//         <HoverCounter count={count} incrementCount={incrementCounter} />
//       )}
//     /> */}
//     {/* <ClickCounter />
//     <HoverCounter /> */}

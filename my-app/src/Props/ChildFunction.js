function Child(props) {
  return (
    <div>
      {/* /////////////////////////////////////////////////////
      // Without Parameters is passing child to Parent ////
      ///////////////////////////////////////////////////// */}

      {/* <button onClick={props.eventHandle}>Child Button</button> */}

      {/* /////////////////////////////////////////////////////
      // Without Parameters is passing child to Parent ////
      ///////////////////////////////////////////////////// */}

      <button onClick={() => props.eventHandle("Child argument")}>
        Child Button
      </button>
    </div>
  );
}
export default Child;

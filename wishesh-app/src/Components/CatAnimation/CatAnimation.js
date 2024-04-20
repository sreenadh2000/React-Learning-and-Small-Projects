import "../CatAnimation/Cat.css";

function CatAnimation({ runAnimate, moveAnimate }) {
  return (
    <div id="CatContainer">
      {/* <h1>Cat Animation</h1> */}
      <div className={moveAnimate}>
        <div className={runAnimate}></div>
      </div>
    </div>
  );
}

export default CatAnimation;

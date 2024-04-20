function SplitText(props) {
  return (
    <div className="splitText">
      <span aria-label={props.copy} role={props.role}>
        {props.copy.split("").map(function (char, index) {
          let style = { animationDelay: 0.5 + index / 10 + "s" };
          return (
            <span aria-hidden="true" key={index} style={style}>
              {char}
            </span>
          );
        })}
      </span>
    </div>
  );
}

function LetterShuffle(props) {
  return (
    <div className="LetterShuffle">
      <h1>
        <SplitText copy={props.name} role="heading" />
      </h1>
    </div>
  );
}
export default LetterShuffle;

import { useState } from "react";
import CatAnimation from "../CatAnimation/CatAnimation";
import "./Landing.css";
import LetterShuffle from "./LetterShuffle";

function Landing({ name, btText, runAnimation, moveAnimation, background }) {
  let [RunCatCondition, setRunCAtCondition] = useState(false);
  // console.log(RunCatCondition);
  return (
    <div id="Landing" style={{ background: `${background}` }}>
      <LetterShuffle name={name} />
      <button
        onClick={() => {
          setRunCAtCondition((RunCatCondition = true));
        }}
      >
        {/* Click and Catch the Cat */}
        {btText}
      </button>
      {RunCatCondition && (
        <CatAnimation runAnimate={runAnimation} moveAnimate={moveAnimation} />
      )}
    </div>
  );
}

export default Landing;

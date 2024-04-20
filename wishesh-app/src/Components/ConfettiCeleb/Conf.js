import ConfettiCeleb from "./Confetti";
import { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import "./Confetti.css";
import { WaveText } from "./WaveText";

export default function Conf({ Ref, Cond }) {
  const [isExploding, setIsExploding] = useState(false);
  return (
    <div
      id="Confett"
      style={{ height: "100vh", textAlign: "center" }}
      ref={Ref}
    >
      <button onClick={() => setIsExploding(true)}>Click Me</button>
      {isExploding && (
        <ConfettiExplosion
          force={0.5}
          duration={3000}
          particleCount={250}
          width={2000}
          height={"100vh"}
        />
      )}
      <WaveText />
    </div>
  );
}

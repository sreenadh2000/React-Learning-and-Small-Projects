// import useWindowSize from "react-use/lib/useWindowSize";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function ConfettiCeleb(params) {
  // const { width, height } = useWindowSize();
  const [windowDimentions, setWindowDimentions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const ditectSize = () => {
    setWindowDimentions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", ditectSize);
    return () => {
      window.removeEventListener("resize", ditectSize);
    };
  }, [windowDimentions]);
  return (
    <Confetti
      width={windowDimentions.width}
      height={windowDimentions.height}
    ></Confetti>
  );
}

import { useEffect, useState } from "react";
import "./TypingText.css";
import SlideShower from "./SlideShower";
function TypingText({ text, delay, infinite }) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // const [condition, setCondition] = useState(false);
  // const [scrollTop, setScrollTop] = useState(0);

  // const handleScroll = (event) => {
  //   setScrollTop(event.currentTarget.scrollTop);
  //   console.log(scrollTop);
  //   setCondition(true);
  //   console.log(condition);
  //   return () => {
  //     document
  //       .getElementsByClassName("Typing-Text-Container")[0]
  //       .removeEventListener("scroll", handleScroll);
  //   };
  // };

  useEffect(() => {
    if (currentIndex < text.length) {
      let timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    }
    // else if (infinite) {
    //   setCurrentIndex(0);
    //   setCurrentText("");
    // }
    // return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return (
    <div className="Typing-Text-Container">
      <div className="TypingText">
        <h4>{currentText}</h4>
        <SlideShower />
      </div>
    </div>
  );
}

export default TypingText;

import Landing from "./Home/Landing";
import "../App.css";
import "./Parent.css";

import { Parallax } from "react-parallax";
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import gradient from "./ParentImages/Gradient.jpg";
import blwt from "./ParentImages/blue-White.jpg";
import CarringCandle from "./ParentImages/Carring-Candle.jpg";
import PlainBlue from "./ParentImages/plain-blue.jpg";
import DecBlue from "./ParentImages/dec-blue.jpg";
import Candile from "./ParentImages/Candile.jpg";
import TypingText from "./About/TypingText";
import SlideShower from "./About/SlideShower";
import Gallery from "./PhotosPage/Gallery";
import ConfettiCeleb from "./ConfettiCeleb/Confetti";
import Conf from "./ConfettiCeleb/Conf";

function Parent() {
  // const aboutReference = useRef();
  // const LandingReference = useRef();
  // console.log(aboutReference);
  const { ref: aboutReference, inView: aboutPageVisibility } = useInView();
  const { ref: ConfettReference, inView: ConfettPageVisibility } = useInView();
  // console.log(aboutPageVisibility);
  // console.log(aboutReference);
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     console.log(entry);
  //   });
  //   observer.observe(aboutReference.current);
  // }, []);
  return (
    <div className="parent">
      {/* Landing Pages .................... */}
      <Landing
        name="Happy Birthday"
        btText="Cick and Catch the Cat"
        runAnimation="cat fast-Run"
        moveAnimation="container fast-move"
        background="linear-gradient(#3235de, #25aaf1)"
      />
      {/* About Pages...... */}
      <Parallax
        bgImage={PlainBlue}
        bgImageAlt="the cat"
        strength={600}
        bgStyle={{ width: "100%" }}
      >
        <div className="AboutPage" ref={aboutReference}>
          {aboutPageVisibility && (
            <>
              <TypingText text="My react App " delay={100} infinite={true} />
            </>
          )}
        </div>
      </Parallax>
      {/* Landing Pages .................... */}
      {/* <Landing
        name="Happy Birthday"
        btText="Again Try to Catch"
        runAnimation="cat walking"
        moveAnimation="container walk-move"
        background="linear-gradient(#55aaf1, #6062e8)"
      /> */}
      {/* Photos Pages................................................. */}
      <Parallax
        bgImage={gradient}
        bgImageAlt="the cat"
        strength={600}
        style={{ width: "100%", height: "100%" }}
      >
        <div id="photosPage">
          <h4>THis is the Photos Page</h4>
          {/* <TypingText text="My react App " delay={100} infinite={true} /> */}
          <Gallery />
        </div>
      </Parallax>
      {/* Confetti Pages................................................. */}
      {/* <div>
        <h1>Confetti Cewlebration</h1>
        <ConfettiCeleb />
      </div> */}
      <Conf Ref={ConfettReference} Cond={ConfettPageVisibility} />
    </div>
  );
}

export default Parent;

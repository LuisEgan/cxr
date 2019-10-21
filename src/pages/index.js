import React, { useEffect, useState } from "react";
import Particles from "react-particles-js";
import LazyLinePainter from "lazy-painter";
import SEO from "common/seo";
import particles from "json/particles.json";

import Isologo from "svg/isologo.svg";
import Smartphone from "svg/smartphone.svg";
import VR from "svg/vr.svg";

import "scss/index.scss";
import THREEScene from "../components/THREEScene";
import { routes } from "utils";

const IndexPage = () => {
  // useEffect(() => {
  //   // TODO replace for TweenMax
  //   let el = document.querySelector("#eye");
  //   let myAnimation = new LazyLinePainter(el, {
  //     ease: "easeLinear",
  //     strokeWidth: 19.2,
  //     strokeOpacity: 1,
  //     strokeColor: "#f2f2f2",
  //     strokeCap: "square",
  //   });
  //   myAnimation.paint();
  // }, []);

  const [view, setView] = useState(routes.home);
  const [starsRotationSpeed, setStarsRotationSpeed] = useState(0.0002);

  const updateView = view => {
    setView(view);
    setStarsRotationSpeed(0.02);

    setTimeout(() => {
      setStarsRotationSpeed(0.0002);
      console.log("DONE!");
    }, 500);
  };

  return (
    <div className="fadeIn">
      <SEO title="Home" />
      <div id="home">
        {/* <Particles params={particles} className="fullscreen-canvas" /> */}
        <THREEScene id="3d-scene" starsRotationSpeed={starsRotationSpeed} />
        <Isologo id="eye" className={view !== routes.home ? "eyeToTop" : ""} />

        <div id="xrButton-container">
          <div className="xrButton" onClick={() => updateView(routes.ar)}>
            <Smartphone />
          </div>
          <div className="xrButton" onClick={() => updateView(routes.vr)}>
            <VR />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

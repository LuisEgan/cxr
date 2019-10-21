import React, { useEffect } from "react";
import Particles from "react-particles-js";
import LazyLinePainter from "lazy-painter";
import SEO from "common/seo";
import particles from "json/particles.json";

import Isologo from "svg/isologo.svg";

import "scss/index.scss";
import THREEScene from "../components/THREEScene";

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

  return (
    <div className="fadeIn">
      <SEO title="Home" />
      <div id="home">
        {/* <Particles params={particles} className="fullscreen-canvas" /> */}
        <THREEScene id="3d-scene"/>
        <Isologo id="eye" />

        <div id="xrButton-container">
          <div className="xrButton">AR</div>
          <div className="xrButton">VR</div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

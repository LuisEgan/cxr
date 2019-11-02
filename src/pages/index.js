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
import FullscreenLoading from "../components/FullscreenLoading";

const IndexPage = props => {
  const { navigate } = props;

  useEffect(() => {
    // TODO replace with TweenMax
    let el = document.querySelector("#eye");
    let myAnimation = new LazyLinePainter(el, {
      ease: "easeLinear",
      strokeWidth: 19.2,
      strokeOpacity: 1,
      strokeColor: "#f2f2f2",
      strokeCap: "square",
    });
    myAnimation.paint();
  }, []);

  const [view, setView] = useState(routes.home);
  const [fadeClass, setFadeClass] = useState("fadeIn");
  const [THREESceneLoading, setTHREESceneLoading] = useState(true);
  console.log("THREESceneLoading: ", THREESceneLoading);

  const updateView = view => {
    setView(view);
    setFadeClass("fadeOut");

    setTimeout(() => {
      navigate("/page-2");
    }, 2500);
  };

  return (
    <div className={fadeClass}>
      <SEO title="Home" />
      <div id="home">
        {/* <Particles params={particles} className="fullscreen-canvas" /> */}

        <FullscreenLoading show={THREESceneLoading} />

        <THREEScene id="3d-scene" setLoading={setTHREESceneLoading} updateView={updateView}/>
        <Isologo id="eye" className={view !== routes.home ? "eyeToTop" : ""} />

        {/* <div id="xrButton-container">
          <div className="xrButton" onClick={() => updateView(routes.ar)}>
            <Smartphone />
          </div>
          <div className="xrButton" onClick={() => updateView(routes.vr)}>
            <VR />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default IndexPage;

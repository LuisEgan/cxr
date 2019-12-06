import React, { useEffect, useState } from "react";
import SEO from "common/seo";
import Lottie from "react-lottie";

import isologoData from "json/loading_2.json";

import Smartphone from "svg/smartphone.svg";
import VR from "svg/vr.svg";

import THREEScene from "../components/THREEScene";
import { routes } from "utils";
import FullscreenLoading from "../components/FullscreenLoading";
import GlitchedText from "../components/GlitchedText";

import "scss/index.scss";
import { useIsMobile } from "../utils/hooks";

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: isologoData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const IndexPage = props => {
  const { navigate } = props;

  const isMobile = useIsMobile();
  const [fadeClass, setFadeClass] = useState("fadeIn");
  const [THREESceneLoading, setTHREESceneLoading] = useState(true);
  console.log("THREESceneLoading: ", THREESceneLoading);
  const [glitchedText, setGlitchedText] = useState("");

  const updateView = view => {
    setFadeClass("fadeOut");

    setTimeout(() => {
      navigate(`/${view}`);
    }, 800);
  };

  return (
    <div className={fadeClass}>
      <SEO title="Home" />
      <div id="home">
        <FullscreenLoading show={!isMobile && THREESceneLoading} />

        <THREEScene
          id="3d-scene"
          setLoading={setTHREESceneLoading}
          updateView={updateView}
          isMobile={isMobile}
          setGlitchedText={setGlitchedText}
        />

        {(!THREESceneLoading || isMobile) && (
          <>
            <div id="eye">
              <Lottie options={defaultOptions} width="60%" height="unset" />
              Cleverit XR
            </div>
            {glitchedText && <GlitchedText text={glitchedText} />}
          </>
        )}

        {isMobile && (
          <div id="xrButton-container">
            <div className="xrButton" onClick={() => updateView(routes.ar)}>
              <Smartphone />
            </div>
            <div className="xrButton" onClick={() => updateView(routes.vr)}>
              <VR />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndexPage;

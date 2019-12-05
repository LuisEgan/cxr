import React, { useState } from "react";
import { isMobile } from "react-device-detect";

import QR from "png/pattern-cxrqr-opacity-50.png";

import "./styles.scss";

const InteractiveAR = () => {
  const [clicked, setClicked] = useState();

  if (isMobile) return null;

  return (
    <div id="interactiveAR">
      {clicked ? (
        <div id="scanMe">
          <span>¡Escanéame con tu celular!</span>
          <br />
          <img src={QR} alt="AR" />
        </div>
      ) : (
        <div id="clickMe" onClick={() => setClicked(true)}>
          <span aria-label="emoji">👀</span>
          {/* <span>click</span> */}
        </div>
      )}
    </div>
  );
};

export default InteractiveAR;

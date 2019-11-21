import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Lottie from "react-lottie";

import loadingData from "json/loading_1.json";
import loadingData2 from "json/loading_2.json";
import GlitchedText from "../GlitchedText";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const FullscreenLoading = props => {
  const { id, style, className, show } = props;

  const [doShow, setDoShow] = useState(show);

  useEffect(() => {
    if (show) {
      setDoShow(true);
    } else {
      setTimeout(() => {
        setDoShow(false);
      }, 2000);
    }
  }, [show]);

  if (!doShow) return null;

  return (
    <div
      className={`fullscreen-loading ${show ? "" : "fadeOut"} ${className}`}
      style={style}
      id={id}
    >
      {/* <Lottie options={defaultOptions} height="unset" width="unset"/> */}
      <GlitchedText text="Loading" />
    </div>
  );
};

FullscreenLoading.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  show: PropTypes.bool.isRequired,
};

export default FullscreenLoading;

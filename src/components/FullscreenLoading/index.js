import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

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
      className={`fullscreen-loading ${
        show ? "fadeIn" : "fadeOut"
      } ${className}`}
      style={style}
      id={id}
    >
      LOADING
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

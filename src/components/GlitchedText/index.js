import React from "react";
import PropTypes from "prop-types";

const GlitchedText = props => {
  const { text } = props;

  return (
    <div className="glitched-text">
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
    </div>
  );
};

GlitchedText.propTypes = {
  text: PropTypes.string,
};

GlitchedText.defaultProps = {
  text: "Text",
};

export default GlitchedText;

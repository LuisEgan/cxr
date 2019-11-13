import React, { useEffect } from "react";
import PropTypes from "prop-types";
import handleViewport from "react-in-viewport";

const Section = props => {
  const { inViewport, forwardedRef, children, setCurrentSection, id } = props;

  useEffect(() => {
    if (inViewport) {
      setCurrentSection(id);
    }
  }, [inViewport]);

  return (
    <div ref={forwardedRef} id={id}>
      {children}
    </div>
  );
};

Section.propTypes = {
  setCurrentSection: PropTypes.string,
  id: PropTypes.string,
};

export default handleViewport(Section);

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import handleViewport from "react-in-viewport";

const Section = props => {
  const { inViewport, forwardedRef, children, updateSectionsState, id } = props;

  useEffect(() => {
    updateSectionsState({ [id]: inViewport });
  }, [inViewport]);

  return (
    <div ref={forwardedRef} id={id}>
      {children}
    </div>
  );
};

Section.propTypes = {
  updateSectionsState: PropTypes.func,
  id: PropTypes.string,
};

export default handleViewport(Section);

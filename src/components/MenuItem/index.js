import React from "react";
import PropTypes from "prop-types";

const MenuItem = props => {
  const { icon, title, reversed, className } = props;

  return (
    <div className={`menuItem ${className}`}>
      {reversed ? (
        <>
          {title}
          {icon}
        </>
      ) : (
        <>
          {icon}
          {title}
        </>
      )}
    </div>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  reversed: PropTypes.bool,
};

MenuItem.defaultProps = {
  starsRotationSpeed: 0.0002,
};

export default MenuItem;

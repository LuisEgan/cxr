import React, { useState } from "react";
import PropTypes from "prop-types";
import ChevronLeft from "svg/chevronLeft.svg";
import ChevronRight from "svg/chevronRight.svg";

const Menu = props => {
  const { onClick: onClickProp, changeTo } = props;

  const [clicked, setClicked] = useState(false);

  const onClick = title => {
    setClicked(title);
    onClickProp && onClickProp();
  };

  return (
    <div
      className={`layout-side clickable ${
        clicked ? `changeTo${changeTo.toUpperCase()}` : ""
      }`}
      onClick={onClick}
    >
      {changeTo === "vr" ? <ChevronRight /> : <ChevronLeft />}
    </div>
  );
};

Menu.propTypes = {
  onClick: PropTypes.func,
  changeTo: PropTypes.oneOf(["ar", "vr"]).isRequired,
};

Menu.defaultProps = {};

export default Menu;

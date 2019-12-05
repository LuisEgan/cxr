import React, { useState } from "react";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";

import ChevronLeft from "svg/chevronLeft.svg";
import ChevronRight from "svg/chevronRight.svg";
import AR from "svg/icon_ar.svg";
import VR from "svg/icon_vr.svg";

const Menu = props => {
  const { onClick: onClickProp, changeTo } = props;

  const [clicked, setClicked] = useState(false);

  const onClick = title => {
    setClicked(title);
    onClickProp && onClickProp();
  };

  return (
    <>
      {isMobile ? (
        <div id="layout-side-mobile-arrow" onClick={onClick}>
          {changeTo.toUpperCase()}
        </div>
      ) : (
        <div
          className={`layout-side menu-transition ${
            clicked ? `changeTo${changeTo.toUpperCase()}` : ""
          }`}
          onClick={onClick}
        >
          {changeTo === "vr" ? (
            <div>
              <span>VR</span>
              <VR />
            </div>
          ) : (
            <div>
              <span>AR</span>
              <AR />
            </div>
          )}
        </div>
      )}
    </>
  );
};

Menu.propTypes = {
  onClick: PropTypes.func,
  changeTo: PropTypes.oneOf(["ar", "vr"]).isRequired,
};

Menu.defaultProps = {};

export default Menu;

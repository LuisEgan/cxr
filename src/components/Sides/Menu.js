import React, { useState, useEffect, forwardRef } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Link as ScrollLink } from "react-scroll";
import { isMobile } from "react-device-detect";
import Lottie from "react-lottie";

import ChevronLeft from "svg/chevronLeft.svg";
import ChevronRight from "svg/chevronRight.svg";

import MenuItem from "./MenuItem";
import Contact from "svg/icons/contact.svg";
import Us from "svg/icons/us.svg";
import UseCases from "svg/icons/useCases.svg";
import WeDo from "svg/icons/weDo.svg";

import blinkData from "json/blink.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: blinkData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const menu = [
  { icon: <Us />, title: "Nosotros" },
  { icon: <WeDo />, title: "Servicios" },
  // { icon: <UseCases />, title: "Éxito" },
  { icon: <Contact />, title: "Contacto" },
];

const Menu = forwardRef((props, ref) => {
  const {
    onClickItem: onClickItemProp,
    selected: selectedProp,
    side,
    mobileHidden: mobileHiddenProp,
    currentSection,
  } = props;

  const [mobileHidden, setMobileHidden] = useState(true);
  const [mobileToggleIcon, setMobileToggleIcon] = useState(
    side === "left" ? <ChevronRight /> : <ChevronLeft />
  );

  useEffect(() => {
    setMobileHidden(mobileHiddenProp);
  }, [mobileHiddenProp]);

  const onClickItem = title => {
    onClickItemProp && onClickItemProp();
  };

  const onClickMobileToggle = () => {
    setMobileHidden(!mobileHidden);

    let newIcon;
    if (mobileHidden) {
      newIcon = side === "left" ? <ChevronLeft /> : <ChevronRight />;
    } else {
      newIcon = side === "left" ? <ChevronRight /> : <ChevronLeft />;
    }
    setMobileToggleIcon(newIcon);
  };

  const getSideClass = () => {
    if (!isMobile) return `layout-side`;

    let className = `layout-side-mobile`;

    if (mobileHidden) {
      className += ` hidden-${side}`;
    }

    return className;
  };

  return (
    <div className={getSideClass()} ref={ref}>
      {isMobile && (
        <div id="layout-side-mobile-toggle" onClick={onClickMobileToggle}>
          {mobileToggleIcon}
        </div>
      )}

      <header>
        <Link to="/">
          <Lottie options={defaultOptions} width={"60%"} height={"60%"} />
        </Link>
      </header>

      <main>
        {menu.map(({ icon, title }) => (
          <ScrollLink
            key={title}
            to={title}
            containerId="content"
            smooth={true}
            offset={-50}
            duration={200}
            onClick={() => onClickItem(title)}
          >
            <MenuItem
              icon={icon}
              title={title}
              className={currentSection === title ? "menuItem-selected" : ""}
            />
          </ScrollLink>
        ))}
      </main>

      <footer> © Cleverit XR </footer>
    </div>
  );
});

Menu.propTypes = {
  side: PropTypes.oneOf(["left", "right"]).isRequired,
  currentSection: PropTypes.string.isRequired,
  onClickItem: PropTypes.func,
  selected: PropTypes.string,
  mobileHidden: PropTypes.bool,
};

Menu.defaultProps = {};

export default Menu;

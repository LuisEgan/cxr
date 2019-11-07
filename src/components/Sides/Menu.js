import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link as ScrollLink } from "react-scroll";
import Isologo from "svg/isologo.svg";

import MenuItem from "./MenuItem";
import Contact from "svg/icons/contact.svg";
import Us from "svg/icons/us.svg";
import UseCases from "svg/icons/useCases.svg";
import WeDo from "svg/icons/weDo.svg";

import "./styles.scss";

const menu = [
  { icon: <Us />, title: "Nosotros" },
  { icon: <WeDo />, title: "Servicios" },
  // { icon: <UseCases />, title: "Éxito" },
  { icon: <Contact />, title: "Contacto" },
];

const Menu = props => {
  const { onClickItem: onClickItemProp, selected: selectedProp } = props;

  const [selected, setSelected] = useState("Nosotros");

  useEffect(() => {
    if (selectedProp) {
      setSelected(selectedProp);
    }
  }, [selectedProp]);

  const onClickItem = title => {
    setSelected(title);
    onClickItemProp && onClickItemProp();
  };

  return (
    <div className={`layout-side`}>
      <header>
        <Isologo />
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
              className={selected === title ? "menuItem-selected" : ""}
            />
          </ScrollLink>
        ))}
      </main>

      <footer> © Cleverit XR </footer>
    </div>
  );
};

Menu.propTypes = {
  onClickItem: PropTypes.func,
  selected: PropTypes.string,
};

Menu.defaultProps = {};

export default Menu;

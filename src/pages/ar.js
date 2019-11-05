import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { Link as ScrollLink, Element } from "react-scroll";

import SEO from "common/seo";
import MenuItem from "../components/MenuItem";

import Contact from "svg/icons/contact.svg";
import Us from "svg/icons/us.svg";
import UseCases from "svg/icons/useCases.svg";
import WeDo from "svg/icons/weDo.svg";
import ChevronRight from "svg/chevronRight.svg";

const menu = [
  { icon: <Us />, title: "Nosotros" },
  { icon: <WeDo />, title: "Servicios" },
  { icon: <UseCases />, title: "Éxito" },
  { icon: <Contact />, title: "Contacto" },
];

const AR = props => {
  const { navigate } = props;

  const [selected, setSelected] = useState("Nosotros");
  const [fadeClass, setFadeClass] = useState("fadeIn");

  const updateView = () => {
    setFadeClass("fadeOut");

    setTimeout(() => {
      navigate(`/vr`);
    }, 200);
  };

  return (
    <div className={`layout`}>
      <SEO title="Cleverit AR" />

      <div className={`layout-side`}>
        {menu.map(({ icon, title }) => (
          <ScrollLink
            key={title}
            to={title}
            containerId="content"
            smooth={true}
            offset={-50}
            duration={200}
            onClick={() => setSelected(title)}
          >
            <MenuItem
              icon={icon}
              title={title}
              className={selected === title ? "menuItem-selected" : ""}
            />
          </ScrollLink>
        ))}
      </div>

      <main id="content" children={fadeClass}>
        <Element className="section" name="Nosotros">
          <h1>AR</h1>
          <Link to="/">Go back to the homepage</Link>
        </Element>

        <Element className="section" name="Servicios">
          <h1>ASASDAW</h1>
          <Link to="/">Go back to the homepage</Link>
        </Element>

        <Element className="section" name="Éxito">
          <h1>EEEE</h1>
          <Link to="/">Go back to the homepage</Link>
        </Element>

        <Element className="section" name="Contacto">
          <h1>AR</h1>
          <Link to="/">Go back to the homepage</Link>
        </Element>
        <footer> © Cleverit XR </footer>
      </main>

      <div
        className={`layout-side clickable ${
          fadeClass === "fadeOut" ? "changeToVR" : ""
        }`}
        onClick={updateView}
      >
        <ChevronRight />
      </div>
    </div>
  );
};

export default AR;

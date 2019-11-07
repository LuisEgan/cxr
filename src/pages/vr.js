import React, { useState } from "react";
import { Link } from "gatsby";
import { Element } from "react-scroll";

import SEO from "common/seo";
import Menu from "../components/Sides/Menu";
import Arrow from "../components/Sides/Arrow";

const VR = props => {
  const { navigate } = props;

  const [hiddenStyle, setHiddenStyle] = useState({});

  const updateView = () => {
    setHiddenStyle({ visibility: "hidden" });
    setTimeout(() => {
      navigate(`/ar`);
    }, 200);
  };

  return (
    <div className={`layout`}>
      <SEO title="Cleverit VR" />

      <Arrow onClick={updateView} changeTo="ar" />

      <main id="content" style={hiddenStyle}>
        <Element className="section" name="Nosotros">
          <h1>VR</h1>
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
          <h1>VR</h1>
          <Link to="/">Go back to the homepage</Link>
        </Element>
        <footer> © Cleverit XR </footer>
      </main>

      <Menu />
    </div>
  );
};

export default VR;

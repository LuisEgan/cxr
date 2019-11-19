import React, { useState } from "react";
import { Link } from "gatsby";
import { Element } from "react-scroll";
import { isMobile } from "react-device-detect";

import SEO from "common/seo";
import Menu from "../components/Sides/Menu";
import Arrow from "../components/Sides/Arrow";
import Section from "../components/.common/Section";

const VR = props => {
  const { navigate } = props;

  const [currentSection, setCurrentSection] = useState("us");
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
        <Section setCurrentSection={setCurrentSection} id="Nosotros">
          <Element className="section" name="Nosotros">
            <h1>VR</h1>
            <Link to="/">Go back to the homepage</Link>
          </Element>
        </Section>

        <Section setCurrentSection={setCurrentSection} id="Servicios">
          <Element className="section" name="Servicios">
            <h1>ASASDAW</h1>
            <Link to="/">Go back to the homepage</Link>
          </Element>
        </Section>

        <Section setCurrentSection={setCurrentSection} id="Éxito">
          <Element className="section" name="Éxito">
            <h1>EEEE</h1>
            <Link to="/">Go back to the homepage</Link>
          </Element>
        </Section>

        <Section setCurrentSection={setCurrentSection} id="Contacto">
          <Element className="section" name="Contacto">
            <h1>VR</h1>
            <Link to="/">Go back to the homepage</Link>
          </Element>
        </Section>
        <footer> © Cleverit XR </footer>
      </main>

      <Menu side="left" currentSection={currentSection} />
    </div>
  );
};

export default VR;

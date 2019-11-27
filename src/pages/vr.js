import React, { useState, useEffect } from "react";
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

  const [sectionsState, setSectionsState] = useState({
    Nosotros: true,
    Servicios: false,
    Contacto: false,
  });

  useEffect(() => {
    for (let section in sectionsState) {
      if (sectionsState[section]) {
        setCurrentSection(section);
      }
    }
  }, [sectionsState]);

  const updateView = () => {
    setHiddenStyle({ visibility: "hidden" });
    setTimeout(() => {
      navigate(`/ar`);
    }, 200);
  };

  const updateSectionsState = sectionState => {
    setSectionsState({ ...sectionsState, ...sectionState });
  };

  return (
    <div className={`layout`}>
      <SEO title="Cleverit VR" />

      <Arrow onClick={updateView} changeTo="ar" />

      <main id="content" style={hiddenStyle}>
        <Section updateSectionsState={updateSectionsState} id="Nosotros">
          <Element className="section" name="Nosotros">
            <h1>VR</h1>
            <Link to="/">Go back to the homepage</Link>
          </Element>
        </Section>

        <Section updateSectionsState={updateSectionsState} id="Servicios">
          <Element className="section" name="Servicios">
            <h1>ASASDAW</h1>
            <Link to="/">Go back to the homepage</Link>
          </Element>
        </Section>

        <Section updateSectionsState={updateSectionsState} id="Éxito">
          <Element className="section" name="Éxito">
            <h1>EEEE</h1>
            <Link to="/">Go back to the homepage</Link>
          </Element>
        </Section>

        <Section updateSectionsState={updateSectionsState} id="Contacto">
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

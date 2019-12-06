import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { isMobile } from "react-device-detect";
import Lottie from "react-lottie";

import SEO from "common/seo";
import Menu from "../components/Sides/Menu";
import Arrow from "../components/Sides/Arrow";

import Isologo from "svg/isologo.svg";
import AndroidAR from "svg/AndroidAR.svg";
import IOSAR from "svg/IOSAR.svg";
import UIUXAR from "svg/UI_UX_AR.svg";
import WebAR from "svg/WebAR.svg";

import FinalProduct from "json/finalProductAr.json";

import Section from "../components/.common/Section";
import ContactForm from "../components/ContactForm";
import ContactButton from "../components/ContactButton";
import InteractiveAR from "../components/InteractiveAR";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: FinalProduct,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const AR = props => {
  const { navigate } = props;

  const [hiddenStyle, setHiddenStyle] = useState({});
  const [currentSection, setCurrentSection] = useState("us");

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
      navigate(`/vr`);
    }, 200);
  };

  const updateSectionsState = sectionState => {
    setSectionsState({ ...sectionsState, ...sectionState });
  };

  return (
    <div className={`layout`}>
      <SEO title="Cleverit AR" />

      <Menu currentSection={currentSection} side="left" />

      <main id="content" style={hiddenStyle}>
        <Section updateSectionsState={updateSectionsState} id="Nosotros">
          <Element className="section" name="Nosotros">
            <h1>Cleverit AR</h1>
            <h3>Augmented Reality</h3>
            <br />

            <div id="us-content">
              <div>
                <p>
                  Soluciones en AR para: <br />
                  <br />
                </p>
                <ul>
                  <li>Marketing</li>
                  <li>Retail</li>
                  <li>Operaciones industriales</li>
                  <li>Lo que necesites</li>
                </ul>

                <ContactButton text="¡Únete al futuro!" />
              </div>

              <div className="">
                <InteractiveAR />
              </div>
            </div>
          </Element>
        </Section>

        <Section updateSectionsState={updateSectionsState} id="Servicios">
          <Element className="section" name="Servicios">
            <h1>Servicios</h1>

            <div id="services-content">
              <div id="services-content-icons">
                <AndroidAR />
                <IOSAR />
                <WebAR />
                <UIUXAR />
              </div>

              <div id="services-content-result">
                <Lottie
                  options={defaultOptions}
                  height="unset"
                  width={isMobile ? "90%" : "25%"}
                />
                <div id="services-content-result-info" className="cc">
                  <p>
                    Todas las plataformas. Diseño atractivo. Todo a tu medida.
                  </p>
                </div>
              </div>

              <div id="services-button">
                <ContactButton text="¡Lo quiero!" />
              </div>
            </div>
          </Element>
        </Section>

        <Section updateSectionsState={updateSectionsState} id="Contacto">
          <Element className="section" name="Contacto">
            <h1>Contacto</h1>
            <h3>AR</h3>
            <ContactForm />
          </Element>
        </Section>
      </main>

      <Arrow onClick={updateView} changeTo="vr" />
    </div>
  );
};

export default AR;

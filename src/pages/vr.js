import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import { Element } from "react-scroll";
import Lottie from "react-lottie";

import SEO from "common/seo";
import Menu from "../components/Sides/Menu";
import Arrow from "../components/Sides/Arrow";
import Section from "../components/.common/Section";
import ContactButton from "../components/ContactButton";

import Isologo from "svg/isologo.svg";
import AndroidVR from "svg/AndroidVR.svg";
import IOSVR from "svg/IOSVr.svg";
import UIUXVR from "svg/UiUxVr.svg";
import Headset from "svg/Headset.svg";

import FinalProduct from "json/finalProductVr.json";
import ContactForm from "../components/ContactForm";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: FinalProduct,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const VR = props => {
  const { navigate } = props;

  const [hiddenStyle, setHiddenStyle] = useState({});
  const [currentSection, setCurrentSection] = useState("us");

  useEffect(() => {
    for (let section in sectionsState) {
      if (sectionsState[section]) {
        setCurrentSection(section);
      }
    }
  }, [sectionsState]);

  const [sectionsState, setSectionsState] = useState({
    Nosotros: true,
    Servicios: false,
    Contacto: false,
  });

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
            <h1>Cleverit VR</h1>
            <h3>Virutal Reality</h3>
            <br />

            <div id="us-content">
              <div>
                <p>
                  Soluciones en VR para: <br />
                  <br />
                  <ul>
                    <li>Operaciones industriales</li>
                    <li>Marketing</li>
                    <li>Videojuegos</li>
                    <li>Cualquier mundo que te imagines</li>
                  </ul>
                </p>

                <ContactButton text="¡Únete al futuro!" />
              </div>

              <div className="">
                <Isologo />
              </div>
            </div>
          </Element>
        </Section>

        <Section updateSectionsState={updateSectionsState} id="Servicios">
          <Element className="section" name="Servicios">
            <h1>Servicios</h1>

            <div id="services-content">
              <div id="services-content-icons">
                <AndroidVR />
                <IOSVR />
                <UIUXVR />
                <Headset />
              </div>

              <div id="services-content-result">
                <Lottie
                  options={defaultOptions}
                  height="unset"
                  width={isMobile ? "90%" : "25%"}
                />
                <div id="services-content-result-info" className="cc">
                  <p>
                    Mundos nuevos en cualquier dispositivo. No existen límites,
                    solo oportunidades.
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

      <Menu side="left" currentSection={currentSection} />
    </div>
  );
};

export default VR;

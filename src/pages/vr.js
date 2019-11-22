import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { Element } from "react-scroll";
import Lottie from "react-lottie";

import SEO from "common/seo";
import Menu from "../components/Sides/Menu";
import Arrow from "../components/Sides/Arrow";
import Section from "../components/.common/Section";
import ContactButton from "../components/ContactButton";

import Isologo from "svg/isologo.svg";
import AndroidAR from "svg/AndroidAR.svg";
import IOSAR from "svg/IOSAR.svg";
import UIUXAR from "svg/UI_UX_AR.svg";
import WebAR from "svg/WebAr.svg";

import FinalProduct from "json/finalProductAr.json";
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
            <h1>Cleverit XR</h1>
            <h3>Virtual Reality</h3>
            <br />

            <div id="us-content">
              <div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aspernatur hic cupiditate suscipit dignissimos praesentium
                  quasi at blanditiis tenetur modi ut, iusto perferendis nihil
                  earum impedit quaerat. Ipsum laudantium accusamus ipsa?
                </p>

                <ContactButton text="¡Únete al futuro!" />
              </div>

              <div className="cc">
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
                <AndroidAR />
                <IOSAR />
                <WebAR />
                <UIUXAR />
              </div>

              <div id="services-content-result">
                <Lottie options={defaultOptions} height="unset" width="40%" />
                <div id="services-content-result-info"></div>
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

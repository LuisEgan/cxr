import React, { useState, useEffect } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import Lottie from "react-lottie";

import SEO from "common/seo";
import Menu from "../components/Sides/Menu";
import Arrow from "../components/Sides/Arrow";
import Button from "../components/Button";

import Isologo from "svg/isologo.svg";
import AndroidAR from "svg/AndroidAR.svg";
import IOSAR from "svg/IOSAR.svg";
import UIUXAR from "svg/UI_UX_AR.svg";
import WebAR from "svg/WebAr.svg";

import FinalProduct from "json/finalProductAr.json";

import Section from "../components/.common/Section";
import ContactForm from "../components/ContactForm";

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

  const ContactButton = text => {
    return (
      <ScrollLink
        to="Contacto"
        containerId="content"
        smooth={true}
        offset={-50}
        duration={200}
      >
        <Button text={text} />
      </ScrollLink>
    );
  };

  return (
    <div className={`layout`}>
      <SEO title="Cleverit AR" />

      <Menu currentSection={currentSection} side="left" />

      <main id="content" style={hiddenStyle}>
        <Section updateSectionsState={updateSectionsState} id="Nosotros">
          <Element className="section" name="Nosotros">
            <h1>Cleverit XR</h1>
            <h3>AR</h3>
            <br />

            <div id="us-content">
              <div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aspernatur hic cupiditate suscipit dignissimos praesentium
                  quasi at blanditiis tenetur modi ut, iusto perferendis nihil
                  earum impedit quaerat. Ipsum laudantium accusamus ipsa?
                </p>

                {ContactButton("¡Únete al futuro!")}
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

              <div id="services-button">{ContactButton("¡Lo quiero!")}</div>
            </div>
          </Element>
        </Section>

        {/* <Section updateSectionsState={updateSectionsState} id="Éxito">
          <Element className="section" name="Éxito">
            <h1>Cleverit XR</h1>
            <h3>AR</h3>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur hic cupiditate suscipit dignissimos praesentium quasi
              at blanditiis tenetur modi ut, iusto perferendis nihil earum
              impedit quaerat. Ipsum laudantium accusamus ipsa?
            </p>
            <br />
            {ContactButton("¡Únete al futuro!")}
          </Element>
        </Section> */}

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

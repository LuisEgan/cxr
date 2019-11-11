import React, { useState, useRef } from "react";
import { Link as ScrollLink, Element } from "react-scroll";

import SEO from "common/seo";
import Menu from "../components/Sides/Menu";
import Arrow from "../components/Sides/Arrow";
import Button from "../components/Button";

import Isologo from "svg/isologo.svg";

const AR = props => {
  const { navigate } = props;

  const menuRef = useRef();
  console.log('menuRef: ', menuRef);

  const [hiddenStyle, setHiddenStyle] = useState({});
  const [updateMenuSelect, setUpdateMenuSelect] = useState("");

  const updateView = () => {
    setHiddenStyle({ visibility: "hidden" });
    setTimeout(() => {
      navigate(`/vr`);
    }, 200);
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
        <Button text={text} onClick={() => setUpdateMenuSelect("Contacto")} />
      </ScrollLink>
    );
  };

  return (
    <div className={`layout`}>
      <SEO title="Cleverit AR" />

      <Menu selected={updateMenuSelect} ref={menuRef} side="left" />

      <main id="content" style={hiddenStyle}>
        <Element className="section" name="Nosotros" id="us">
          <h1>Cleverit XR</h1>
          <h3>AR</h3>
          <br />

          <div id="us-content">
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur hic cupiditate suscipit dignissimos praesentium quasi
                at blanditiis tenetur modi ut, iusto perferendis nihil earum
                impedit quaerat. Ipsum laudantium accusamus ipsa?
              </p>

              {ContactButton("¡Únete al futuro!")}
            </div>

            <div className="cc">
              <Isologo />
            </div>
          </div>
        </Element>

        <Element className="section" name="Servicios" id="services">
          <h1>Servicios</h1>
          <h3>AR</h3>
          <br />

          <div id="services-content">
            <div id="services-diagram" className="cc">
              <div id="diagram-center">
                <Isologo />
                <Isologo />
                <Isologo />
                <Isologo />
                <Isologo />
              </div>
            </div>

            <div id="services-button">{ContactButton("¡Lo quiero!")}</div>
          </div>
        </Element>

        <Element className="section" name="Éxito">
          <h1>Cleverit XR</h1>
          <h3>AR</h3>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            hic cupiditate suscipit dignissimos praesentium quasi at blanditiis
            tenetur modi ut, iusto perferendis nihil earum impedit quaerat.
            Ipsum laudantium accusamus ipsa?
          </p>
          <br />
          {ContactButton("¡Únete al futuro!")}
        </Element>

        <Element className="section" name="Contacto">
          <h1>Contacto</h1>
          <h3>AR</h3>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            hic cupiditate suscipit dignissimos praesentium quasi at blanditiis
            tenetur modi ut, iusto perferendis nihil earum impedit quaerat.
            Ipsum laudantium accusamus ipsa?
          </p>
          <br />
        </Element>
      </main>

      <Arrow onClick={updateView} changeTo="vr" />
    </div>
  );
};

export default AR;

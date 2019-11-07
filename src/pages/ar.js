import React, { useState } from "react";
import { Link } from "gatsby";
import { Link as ScrollLink, Element } from "react-scroll";

import SEO from "common/seo";
import Menu from "../components/Sides/Menu";
import Arrow from "../components/Sides/Arrow";
import Button from "../components/Button";

const AR = props => {
  const { navigate } = props;

  const [updateMenuSelect, setUpdateMenuSelect] = useState("");

  const updateView = () => {
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

      <Menu selected={updateMenuSelect} />

      <main id="content">
        <Element className="section" name="Nosotros">
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

        <Element className="section" name="Servicios">
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

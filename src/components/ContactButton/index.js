import React from "react";
import PropTypes from "prop-types";
import { Link as ScrollLink } from "react-scroll";
import Button from "../Button";

const ContactButton = ({ text }) => {
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

ContactButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ContactButton;

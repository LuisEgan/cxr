import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const Button = props => {
  const { text, onClick, disabled } = props;

  const button = useRef();

  useEffect(() => {
    if (button && button.current) {
      const ButtonHover = {
        button: button.current,
        elWidth: 0,
        elHeight: 0,
        cursorX: 0,
        cursorY: 0,
        elCenterX: 0,
        elCenterY: 0,

        init() {
          this.elWidth = button.current.offsetWidth;
          this.elHeight = button.current.offsetHeight;
          button.current.addEventListener("mousemove", e => this.animate(e));
        },

        animate(e) {
          let cord = e.target.getBoundingClientRect();
          this.cursorX = e.x;
          this.cursorY = e.y;
          this.elCenterX = cord.left + cord.width / 2;
          this.elCenterY = cord.top + cord.height / 2;
          let y = this.elCenterY - this.cursorY;
          let x = this.elCenterX - this.cursorX;

          let theta = Math.atan2(y, x);
          let angle = (theta * 180) / Math.PI - 90;
          if (angle < 0) {
            angle = angle + 360;
          }

          button.current.style.transform =
            "translateX(" +
            -x * 0.05 +
            "px) rotateX(" +
            -y * 0.1 +
            "deg) rotateY(" +
            x * 0.1 +
            "deg)";
          button.current.style.boxShadow =
            x * 0.2 + "px " + y * 0.3 + "px 28px rgba(55, 26, 159,0.25)";
        },
      };

      ButtonHover.init();
    }
  }, [button]);

  return (
    <div
      className={`button-center ${disabled ? "disabled" : ""}`}
      onClick={onClick}
      ref={button}
    >
      <span className="button">{text}</span>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {};

export default Button;

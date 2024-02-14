import React from "react";
import PropTypes from "prop-types";

export const Button = ({ title, onClick, variant = "light" }) => {
  return (
    <button className={variant} onClick={onClick}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string,
};

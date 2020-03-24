import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonName, color, wide }) => (
  <div className={`button ${color || 'orange '} ${wide ? 'large-button' : ''}`}>
    <p className="button-text">{buttonName}</p>
  </div>
);

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

export default Button;

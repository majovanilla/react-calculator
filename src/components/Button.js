import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonName, color, wide }) => (
  <div className={`button ${color} ${wide ? 'large-button' : ''}`}>
    <p className="button-text">{buttonName}</p>
  </div>
);

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;

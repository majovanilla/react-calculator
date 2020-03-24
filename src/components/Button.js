import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonName }) => (
  <div className="button">
    <p className="button-text">{buttonName}</p>
  </div>
);

Button.propTypes = { buttonName: PropTypes.string.isRequired };

export default Button;

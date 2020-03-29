import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  clickHandler, buttonName, color, wide,
}) => {
  const handleClick = () => clickHandler(buttonName);

  return (
    <button
      type="submit"
      className={`button ${color} ${wide ? 'large-button' : ''} button-text`}
      onClick={() => handleClick(buttonName)}
    >
      {buttonName}
    </button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;

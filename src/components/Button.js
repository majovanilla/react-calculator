import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

class Button extends React.Component {
  handleClick = (buttonName) => {
    const { clickHandler } = this.props;
    return clickHandler(buttonName);
  }

  render() {
    const { buttonName, color, wide } = this.props;
    return (
      <div className={`button ${color} ${wide ? 'large-button' : ''}`} onClick={() => this.handleClick(buttonName)}>
        <p className="button-text">{buttonName}</p>
      </div>
    )
  };
}

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

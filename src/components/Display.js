import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div className="result">
    <p className="result-text">{result}</p>
  </div>
);

Display.propTypes = { result: PropTypes.string.isRequired };

export default Display;

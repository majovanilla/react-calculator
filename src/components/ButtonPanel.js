import React from 'react';
// import PropTypes from 'prop-types';
// import Button from './Button';

const ButtonPanel = () => (
  <div className="button-panel">
    <div className="group1">
      <button type="submit" className="button">AC</button>
      <button type="submit" className="button">+/-</button>
      <button type="submit" className="button">%</button>
      <button type="submit" className="button">+</button>
    </div>

    <div className="group2">
      <button type="submit" className="button">7</button>
      <button type="submit" className="button">8</button>
      <button type="submit" className="button">9</button>
      <button type="submit" className="button">X</button>
    </div>

    <div className="group3">
      <button type="submit" className="button">4</button>
      <button type="submit" className="button">5</button>
      <button type="submit" className="button">6</button>
      <button type="submit" className="button">-</button>
    </div>

    <div className="group4">
      <button type="submit" className="button">1</button>
      <button type="submit" className="button">2</button>
      <button type="submit" className="button">3</button>
      <button type="submit" className="button">+</button>
    </div>

    <div className="group5">
      <button type="submit" className="button">0</button>
      <button type="submit" className="button">.</button>
      <button type="submit" className="button">=</button>
    </div>
  </div>
);

export default ButtonPanel;

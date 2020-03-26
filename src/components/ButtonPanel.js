import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = buttonName => clickHandler(buttonName);

  return (
    <div className="button-panel">
      <div className="group group1">
        <Button clickHandler={handleClick} color="gray" buttonName="AC" />
        <Button clickHandler={handleClick} color="gray" buttonName="+/-" />
        <Button clickHandler={handleClick} color="gray" buttonName="%" />
        <Button clickHandler={handleClick} buttonName="÷" />
      </div>

      <div className="group group2">
        <Button clickHandler={handleClick} color="gray" buttonName="7" />
        <Button clickHandler={handleClick} color="gray" buttonName="8" />
        <Button clickHandler={handleClick} color="gray" buttonName="9" />
        <Button clickHandler={handleClick} buttonName="x" />
      </div>

      <div className="group group3">
        <Button clickHandler={handleClick} color="gray" buttonName="4" />
        <Button clickHandler={handleClick} color="gray" buttonName="5" />
        <Button clickHandler={handleClick} color="gray" buttonName="6" />
        <Button clickHandler={handleClick} buttonName="-" />
      </div>

      <div className="group group4">
        <Button clickHandler={handleClick} color="gray" buttonName="1" />
        <Button clickHandler={handleClick} color="gray" buttonName="2" />
        <Button clickHandler={handleClick} color="gray" buttonName="3" />
        <Button clickHandler={handleClick} buttonName="+" />
      </div>

      <div className="group group5">
        <Button clickHandler={handleClick} wide color="gray" buttonName="0" />
        <Button clickHandler={handleClick} color="gray" buttonName="." />
        <Button clickHandler={handleClick} buttonName="=" />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;

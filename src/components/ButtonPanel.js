import React from 'react';
import Button from './Button';
// import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = () => (
  <div className="button-panel">
    <div className="group group1">
      <Button color="gray" buttonName="AC" />
      <Button color="gray" buttonName="+/-" />
      <Button color="gray" buttonName="%" />
      <Button buttonName="+" />
    </div>

    <div className="group group2">
      <Button color="gray" buttonName="7" />
      <Button color="gray" buttonName="8" />
      <Button color="gray" buttonName="9" />
      <Button buttonName="X" />
    </div>

    <div className="group group3">
      <Button color="gray" buttonName="4" />
      <Button color="gray" buttonName="5" />
      <Button color="gray" buttonName="6" />
      <Button buttonName="-" />
    </div>

    <div className="group group4">
      <Button color="gray" buttonName="1" />
      <Button color="gray" buttonName="2" />
      <Button color="gray" buttonName="3" />
      <Button buttonName="+" />
    </div>

    <div className="group group5">
      <Button wide buttonName="0" />
      <Button buttonName="." />
      <Button buttonName="=" />
    </div>
  </div>
);

export default ButtonPanel;

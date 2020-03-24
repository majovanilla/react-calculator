import React from 'react';
// import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = () => (
  <div className="button-panel">
    <div className="group group1">
      <Button className="button" color="gray" buttonName="AC" />
      <Button className="button" color="gray" buttonName="+/-" />
      <Button className="button" color="gray" buttonName="%" />
      <Button className="button" buttonName="+" />
    </div>

    <div className="group group2">
      <Button className="button" color="gray" buttonName="7" />
      <Button className="button" color="gray" buttonName="8" />
      <Button className="button" color="gray" buttonName="9" />
      <Button className="button" buttonName="X" />
    </div>

    <div className="group group3">
      <Button className="button" color="gray" buttonName="4" />
      <Button className="button" color="gray" buttonName="5" />
      <Button className="button" color="gray" buttonName="6" />
      <Button className="button" buttonName="-" />
    </div>

    <div className="group group4">
      <Button className="button" color="gray" buttonName="1" />
      <Button className="button" color="gray" buttonName="2" />
      <Button className="button" color="gray" buttonName="3" />
      <Button className="button" buttonName="+" />
    </div>

    <div className="group group5">
      <Button className="button" wide={true} buttonName="0" />
      <Button className="button" buttonName="." />
      <Button className="button" buttonName="=" />
    </div>
  </div>
);

export default ButtonPanel;

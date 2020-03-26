import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
  handleClick = (buttonName) => {
    const { clickHandler } = this.props;
    return clickHandler(buttonName);
  };

  render() {
    return (
      <div className="button-panel" >
        <div className="group group1">
          <Button clickHandler={this.handleClick} color="gray" buttonName="AC" />
          <Button clickHandler={this.handleClick} color="gray" buttonName="+/-" />
          <Button clickHandler={this.handleClick} color="gray" buttonName="%" />
          <Button clickHandler={this.handleClick} buttonName="÷" />
        </div>

        <div className="group group2">
          <Button clickHandler={this.handleClick} color="gray" buttonName="7" />
          <Button clickHandler={this.handleClick} color="gray" buttonName="8" />
          <Button clickHandler={this.handleClick} color="gray" buttonName="9" />
          <Button clickHandler={this.handleClick} buttonName="x" />
        </div>

        <div className="group group3">
          <Button clickHandler={this.handleClick} color="gray" buttonName="4" />
          <Button clickHandler={this.handleClick} color="gray" buttonName="5" />
          <Button clickHandler={this.handleClick} color="gray" buttonName="6" />
          <Button clickHandler={this.handleClick} buttonName="-" />
        </div>

        <div className="group group4">
          <Button clickHandler={this.handleClick} color="gray" buttonName="1" />
          <Button clickHandler={this.handleClick} color="gray" buttonName="2" />
          <Button clickHandler={this.handleClick} color="gray" buttonName="3" />
          <Button clickHandler={this.handleClick} buttonName="+" />
        </div>

        <div className="group group5">
          <Button clickHandler={this.handleClick} wide color="gray" buttonName="0" />
          <Button clickHandler={this.handleClick} color="gray" buttonName="." />
          <Button clickHandler={this.handleClick} buttonName="=" />
        </div>
      </div>
    );
  }
};

export default ButtonPanel;

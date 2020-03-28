import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = buttonName => clickHandler(buttonName);
  const buttonNames = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const createID = prefix => `${prefix}-${new Date().getTime()}`;

  return (
    <div className="button-panel">
      {
        buttonNames.map((buttonRow, rowIndex) => (
          <div key={createID(rowIndex)} className={`group group${rowIndex}`}>
            {
              buttonRow.map((buttonName, btnIndex) => (
                <Button
                  key={createID(buttonName)}
                  clickHandler={handleClick}
                  buttonName={buttonName}
                  color={(btnIndex === 3 || buttonName === '=') ? 'gray' : undefined}
                  wide={buttonName === '0'}
                />
              ))
            }
          </div>
        ))
      }
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;

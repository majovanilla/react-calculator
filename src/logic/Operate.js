/* eslint-disable func-names */
/* eslint-disable quote-props */
/* eslint-disable import/extensions */
import Big from 'big.js';

const operate = (numOne, numTwo, operation) => {
  const bigOne = Big(numOne);
  const bigTwo = Big(numTwo);

  switch (operation) {
    case '/':
      return bigOne.div(bigTwo);
    case 'x':
      return bigOne.times(bigTwo);
    case '-':
      return bigOne.minus(bigTwo);
    case '+':
      return bigOne.plus(bigTwo);
    case '%':
      return bigTwo.div(100);
    default:
      return 0;
  }
};

export default operate;

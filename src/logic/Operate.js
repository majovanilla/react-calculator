/* eslint-disable func-names */
/* eslint-disable quote-props */
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
    default:
      return 0;
  }
};

export default operate;

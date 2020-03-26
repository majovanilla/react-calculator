import Big from 'big.js';

const operate = (numOne, numTwo, operation) => {
  const bigOne = Big(numOne);
  const bigTwo = Big(numTwo);

  switch (operation) {
    case '÷':
      return bigOne.div(bigTwo).toString();
    case 'x':
      return bigOne.times(bigTwo).toString();
    case '-':
      return bigOne.minus(bigTwo).toString();
    case '+':
      return bigOne.plus(bigTwo).toString();
    case '%':
      return bigTwo.div(100).toString();
    default:
      return 0;
  }
};

export default operate;

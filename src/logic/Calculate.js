import operate from './Operate';

const Calculate = (dataObj, buttonName) => {
  const { total, next, operation } = dataObj;

  switch (buttonName) {
    case '÷':
    case 'x':
    case '-':
    case '+':
      if (next) {
        if (total) {
          return { total: operate(total, next, buttonName), next: 0, operation: null };
        }
        return { total: next, next: 0, operation: buttonName };
      }
      if (total && !next) {
        return { total, next, operation: buttonName };
      }
      return 'Please add a number first';

    case '=':
      if (total && next && operation) {
        return { total: operate(total, next, operation), next: 0, operation: null };
      }
      return { total, next, operation };

    case 'AC':
      return { total: 0, next: 0, operation: null };

    case '+/-':
      return { total: total * -1, next: next * -1, operation };

    case '%':
      break;

    case '.':
      if (next) {
        const char = next.split('')[-1];
        if (char === '.') return { total, next, operation };
        return { total, next: (`${next}.`), operation };
      }
      return { total, next: '.', operation };

    default: {
      const number = parseInt(buttonName, 10);
      if (!Number.isNaN(number)) {
        return { total, next: next * 10 + number, operation };
      }
    }
  }
};

export default Calculate;

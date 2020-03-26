import operate from './Operate';

function Calculate(dataObj, buttonName) {
  const { total, next, operation } = dataObj;

  switch (buttonName) {
    case '÷':
    case 'x':
    case '-':
    case '+':
      if (next) {
        if (total) {
          const prevOp = operation;
          return { total: operate(total, next, prevOp), next: null, operation: buttonName };
        }
        return { total: next, next: null, operation: buttonName };
      }
      if (total && !next) {
        return { total, next, operation: buttonName };
      }
      return { total, next, operation };

    case '=':
      if (total && next === null && operation) {
        return { total, next: null, operation: null };
      }
      return { total: operate(total, next, operation), next: null, operation: null };

    case 'AC':
      return { total: 0, next: null, operation: null };

    case '+/-':
      return { total: total * -1, next: next * -1, operation };

    case '%':
      if (next !== null) return { total, next: (operate(0, next, buttonName)), operation };
      break;

    case '.':
      if (next !== null) {
        const char = next.split('')[-1];
        if (char === '.') return { total, next, operation };
        return { total, next: (`${next}.`), operation };
      }
      return { total, next: '0.', operation };

    default: {
      const number = parseInt(buttonName, 10);
      if (!Number.isNaN(number)) {
        if (total && next === null && operation === null) {
          return { total: null, next: next * 10 + number, operation };
        }
        return { total, next: next * 10 + number, operation };
      }
    }
  }
}

export default Calculate;

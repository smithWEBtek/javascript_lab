const createDivisibleFunction = function (divisor) {
  return function (num) {
    return num % divisor === 0;
  };
};

const multiply = 
function (factor) {
  return function (num) {
    return factor * 2;
  }
};

const do6 = 
multiply(6);

const do7 = 
multiply(7);


const divisibleBy3 = createDivisibleFunction(3);

const divisibleBy5 = createDivisibleFunction(5);

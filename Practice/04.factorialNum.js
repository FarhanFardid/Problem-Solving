// Find the factorial of a number. Write a function to calculate the factorial of a given integer.

const factorial = (num) => {
  return num === 0 ? 1 : num * factorial(num - 1);
};

const number = 3;
const result = factorial(number);
console.log(`The factorial of number ${number} is: ${result}`);

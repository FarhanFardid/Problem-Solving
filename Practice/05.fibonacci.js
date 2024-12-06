// Fibonacci sequence. Write a function to generate the nth Fibonacci number.

const fibonacci = (n) => {
  return n === 0 ? 0 : n === 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
};

const number = 7;
const result = fibonacci(number);
console.log(result);

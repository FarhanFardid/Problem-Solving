// Write a function to determine if a given number is even or odd.

const isEvenOdd = (num) => {
  return num % 2 == 0 ? "Even" : "Odd";
};

const number = 32;
const result = isEvenOdd(number);
console.log(`The number is  ${result}`);

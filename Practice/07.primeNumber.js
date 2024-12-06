// Write a function to determine if a given number is prime.

const isPrime = (number) => {
  if (number < 0) return "Enter a positive number";
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const number = 2;
const result = isPrime(number);
console.log(result);

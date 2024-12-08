// Write a function to generate a random number within a specified range.

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const result = randomNumber(3, 8);
console.log(result);

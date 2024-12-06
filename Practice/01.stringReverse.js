// Write a function that takes a string as input and returns the string reversed.

const strReverse = (str) => {
  const revString = str.split("").reverse().join("");
  return revString;
};

const reverseString = strReverse("I Love Cricket");

console.log(reverseString);

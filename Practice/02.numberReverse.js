// Write a function that takes a number as input and returns the number reversed.

const revNumber = (num) => {
  const numStr = num + "";
  console.log(typeof numStr);
  const numberRev = parseInt(numStr.split("").reverse().join(""));
  return numberRev;
};

const reverseNumber = revNumber(123);
console.log(reverseNumber);

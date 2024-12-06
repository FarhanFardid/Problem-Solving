// Write a function to calculate the sum of all elements in an array.

const sumOfArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const array = [4, 5, 6, 7, 3, 23, 12];
const result = sumOfArray(array);
console.log("The sum of the array is: ", result);

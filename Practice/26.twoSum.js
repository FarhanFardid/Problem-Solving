// Given an array of integer numbers and an integer target, return indices of the two numbers such that they add up to the target.

const twoSum = (arr, sum) => {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      console.log(i, j);
      if (arr[i] + arr[j] === sum) {
        return `The indices are: ${i}, ${j}`;
      }
    }
  }
  return "No two number add up to the Sum";
};

const arr = [0, 5, 11, 7, 8, 3, 9];
const sum = 15;
const result = twoSum(arr, sum);
console.log(result);

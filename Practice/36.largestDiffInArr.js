// Write a function that takes an array of integers and returns the largest difference between any two numbers in the array.

const largestDiffInArr = (arr) => {
  let largestDiff = 0;
  let sortedArr = arr.sort((a, b) => {
    return a - b;
  });
  console.log(sortedArr);
  largestDiff = sortedArr[sortedArr.length - 1] - sortedArr[0];
  return largestDiff;
};

const arr1 = [34, 56, 1, 99, 31, 98];
console.log(largestDiffInArr(arr1));

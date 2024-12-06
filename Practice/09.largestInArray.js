// Write a function to find the largest element in an array.

const findLargestElement = (arr) => {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};

const array = [23, 56, 0, -1, 45, -45, 99, 1, 12];
const result = findLargestElement(array);
console.log("The largest element in the array is: ", result);

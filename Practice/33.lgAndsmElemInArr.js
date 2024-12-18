// Given an array of numbers, write a function to find the largest and smallest numbers in the array

const largestAndSmallest = (arr) => {
  let largest = arr[0];
  let smallest = arr[0];

  for (let elem of arr) {
    if (elem > largest) {
      largest = elem;
    } else if (elem < smallest) {
      smallest = elem;
    }
  }
  console.log(largest, smallest);
  return `The largest value is ${largest} and the smallest value is ${smallest}`;
};

const arr1 = [23, 45, 78, 90, 99, 0, -1,101];
const result = largestAndSmallest(arr1);
console.log(result);

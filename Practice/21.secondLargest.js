// Write a function to find the second largest element in an array.

const secondLargest = (arr) => {
  if (arr.length < 2) {
    return "Need at least 2 numbers in the array for comparison";
  }

  let largest = arr[0];
  let secondLargest = arr[1];
  if (secondLargest > largest) {
    [largest, secondLargest] = [secondLargest, largest];
  }

  for (i = 2; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};
const array = [23, 34, 45, 67, 89, 90.5, 91];
const result = secondLargest(array);
console.log("The second largest value in the array is", result);

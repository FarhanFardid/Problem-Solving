//  Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions.

const mergeSortedArr = (arr1, arr2) => {
  let mergeArr = [];

  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergeArr.push(arr1[i]);
      i++;
    } else {
      mergeArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    mergeArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergeArr.push(arr2[j]);
    j++;
  }

  console.log(mergeArr);
  return mergeArr;
};
const numbers1 = [2, 4, 6, 9, 13, 14, 17];
const number2 = [5, 8, 10, 14, 16, 19, 21];
const result = mergeSortedArr(numbers1, number2);
console.log("The Sorted Merged Array is: ", result);

// Write a JavaScript program to find the largest element in a nested array.

const largestInNestedArray = (arr) => {
  let largest = 0;

  for (let elem of arr) {
    if (Array.isArray(elem)) {
      for (let val of elem) {
        if (val > largest) {
          largest = val;
        }
      }
    } else if (elem > largest) {
      largest = elem;
    }
  }
  return largest;
};

const arr1 = [23, 45, [67, 78, 90], [77, 99, 45], [111]];
const result = largestInNestedArray(arr1);
console.log(result);

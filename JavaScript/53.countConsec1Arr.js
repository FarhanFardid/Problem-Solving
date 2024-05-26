// Find the max count of consecutive 1’s in an array

const countConsecutiveOne = (arr) => {
  let maxCount = 0;
  let curCount = 0;

  for (let val of arr) {
    if (val === 1) {
      curCount += 1;
    } else {
      if (curCount > maxCount) {
        maxCount = curCount;
        curCount = 0;
        // console.log(maxCount);
      }
    }
  }
  console.log(maxCount);
  return maxCount;
};

const numbers = [
  1, 1, 3, 4, 1, 1, 1, 4, 5, 6, 7, 8, 1, 1, 1, 1, 1, 1, 5, 6, 1, 1, 1, 1, 1, 9,
];
const result = countConsecutiveOne(numbers);
console.log("The maximum count of Consecutive One is: ", result);

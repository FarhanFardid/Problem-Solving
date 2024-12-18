var removeDuplicates = function (nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

const result = removeDuplicates([2, 3, 4, 4, 6, 7, 7, 7, 8, 9]);
console.log(result);

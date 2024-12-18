var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  console.log(nums);
  return k;
};
const result = removeElement([2, 2, 4, 5, 6, 7, 1], 2);
console.log(result);

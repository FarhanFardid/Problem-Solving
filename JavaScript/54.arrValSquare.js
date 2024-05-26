//  Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same.

const arrSquaredCheck = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const frequencyMap = (arr) => {
    let freqMAp = {};
    for (let num of arr) {
      freqMAp[num] = (freqMAp[num] || 0) + 1;
    }
    return freqMAp;
  };
  count1 = frequencyMap(arr1);
  console.log(count1);
  count2 = frequencyMap(arr2);
  console.log(count2);

  for (let num of arr1) {
    let squared = Math.pow(num, 2);
    if (count2[squared] !== count1[num]) {
      return false;
    }
  }
  return true;
};

const numbers1 = [1, 2, 2, 3, 3];
const numbers2 = [1, 4, 4, 9, 9];

const result = arrSquaredCheck(numbers1, numbers2);
console.log(
  "The numbers1 array has its corresponding squared values in numbers2 : ",
  result
);

// Write a function to remove duplicates from an array.

const removeDuplicate = (arr) => {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
};

const array = [23, 34, 23, 56, 78, 90, 12, 23, 56, 90];
const result = removeDuplicate(array);
console.log("The array after removing duplicate is: ", result);

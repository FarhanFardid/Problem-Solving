// Find All Substrings. Write a function that returns all possible substrings of a given string.

const subString = (str) => {
  let subStrings = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i+1; j <= str.length; j++) {
      console.log(i, j);
      let subStr = str.slice(i, j);
    //   console.log(subStr);
      subStrings.push(subStr);
    //   console.log(subStrings);
    }
  }
  console.log(subStrings);
  return subStrings;
};

const str1 = "abcd";
const result = subString(str1);
console.log(result);

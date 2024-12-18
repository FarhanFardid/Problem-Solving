//  Given a string, write a function to count the occurrences of each character in the string.

const charCount = (str1) => {
  let charObj = {};
  for (let ch of str1) {
    if (!charObj[ch]) {
      charObj[ch] = 1;
    } else {
      charObj[ch] += 1;
    }
  }
  return charObj;
};

const str = "GeeksforGeeks";
console.log(charCount(str));

//   Write a function that finds the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".

const longestPrefix = (arrStr) => {
  if (arrStr.length == 0) {
    return " No String in the Array";
  }

  let prefix = arrStr[0];
  for (let i = 1; i < arrStr.length; i++) {
    while (arrStr[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") {
        return 'No prefix';
      }
    }
  }
  return prefix;
};

const stringArray = ["flower", "flight", "fly"];
const result = longestPrefix(stringArray);
console.log(result);

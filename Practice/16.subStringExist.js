// Write a function to check if a given substring exists in a string.

const subStrMatch = (str, subStr) => {
  const cleanMainStr = str.replace(/[^\w\s]/g, "");
  console.log(cleanMainStr);
  const index = cleanMainStr.indexOf(subStr);
  if (index == -1) {
    return false;
  } else {
    return true;
  }
};

const mainString = " Hello I am from Bangladesh";
const subString = "from";
const result = subStrMatch(mainString, subString);
console.log("The subString is in the main String: ", result);

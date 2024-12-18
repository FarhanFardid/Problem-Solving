var isPalindrome = function (x) {
  let numStr = x + "";
  let revNum = numStr.split("").reverse().join("");
  if (x == revNum) {
    return true;
  } else {
    return false;
  }
};

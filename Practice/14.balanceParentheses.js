// Write a function to determine if a given string of parentheses is balanced.
const checkParentheses = (str) => {
  let matchObj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let track = [];

  for (let val of str) {
    if (val == "(" || val == "{" || val == "[") {
      track.push(val);
    } else if (val == ")" || val == "}" || val == "]") {
      let top = track.pop();
      if (matchObj[top] !== val) {
        return false;
      }
    }
    if (track.length === 0) {
      return true;
    }
  }
};

const bracketString = "({[(]})";
const result = checkParentheses(bracketString);
console.log(result);

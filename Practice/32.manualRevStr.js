// Implement a function to reverse a string without using the built-in reverse() method

const reverseString = (str1) => {
  let letters = str1.split("");
  console.log(letters);
  let revStr = [];

  for (let i = letters.length; i >= 0; i--) {
    revStr.push(letters[i]);
  }
  revStr = revStr.join("");
  console.log(revStr);
  return revStr;
};

// const str = "We are Bangladeshi";
const str = "tpircsavaJ olleH";
const result = reverseString(str);
console.log(result);

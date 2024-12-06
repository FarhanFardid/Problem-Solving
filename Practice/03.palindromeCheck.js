// Write a function to determine if a given string is a palindrome (reads the same backward as forward).

const checkPalindrome = (str) => {
  const cleanStr = str.replace(/[\W_]/g, "").toLowerCase();
  console.log(cleanStr);
  const revStr = cleanStr.split("").reverse().join("");
  return cleanStr === revStr
    ? "The given string is a palindrome"
    : "The given string is not a palindrome";
};

// const result = checkPalindrome("A man, a plan, a canal, Panama");
const result = checkPalindrome("race-car");
console.log(result);

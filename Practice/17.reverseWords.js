// Write a function to reverse the order of words in a given string.

const reverseWords = (str) => {
  const words = str.split(" ");
  console.log(words);
  let reverseWords = words.reverse();
  console.log(reverseWords);
  const reverseWordString = reverseWords.join(" ");
  return reverseWordString;
};

const mainStr = "Hello World, This is from Bangladesh";
const result = reverseWords(mainStr);
console.log(result);

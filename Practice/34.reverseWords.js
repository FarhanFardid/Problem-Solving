// Write a function that reverses the order of words in a sentence without using the built-in reverse() method.

const reverseWords = (str1) => {
  let words = str1.split(" ");
  let revStr = [];
  for (let i = words.length; i >= 0; i--) {
    revStr.push(words[i]);
  }
  revStr = revStr.join(" ");
  return revStr;
};

const str = "Hello I am from Bangladesh";
console.log(reverseWords(str));

//  Write a function that reverses the order of words in a sentence without using the built-in reverse() method.

const revWords = (str) => {
  let words = str.split(" ");
  let revWords = [];
  console.log(words);
  for (let i = words.length - 1; i >= 0; i--) {
    revWords.push(words[i]);
  }
  let revSentence = revWords.join(" ");
  console.log(revWords);
  console.log(revSentence);
  return revSentence;
};
const mainStr = "Hi says JavaScript";
const result = revWords(mainStr);
console.log("The Reverse Words String is : ", result);

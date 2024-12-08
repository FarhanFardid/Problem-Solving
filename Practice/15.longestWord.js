// Write a function to find the longest word in a given string.

const findLongestWord = (str) => {
  let longestWord = "";
  let words = str.split(" ");
  console.log(words);

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  console.log(longestWord);
  return longestWord;
};

const str1 = "I am from bangladesh";
const result = findLongestWord(str1);
console.log(result);

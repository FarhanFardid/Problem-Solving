// Write a JavaScript program to convert a string to title case (capitalize the first letter of each word

const titleCapitalized = (str) => {
  let words = str.split(" ");
  let titleWords = [];
  console.log(words);
  for (let w of words) {
    // console.log(w);
    let modWords= w.slice(0, 1).toUpperCase() + w.slice(1, w.length);
    // console.log(modWords);
    titleWords.push(modWords);
  }
  let titleString = titleWords.join(" ");
  return titleString;
  
};

// const string1 = "hello world how are you";
const string1 = "we are bangladeshi";
const result = titleCapitalized(string1);
console.log(result);

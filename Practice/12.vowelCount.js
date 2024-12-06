// Write a function to count the number of vowels in a given string.

const vowelCount = (string) => {
  let vowels = 0;
  const strToLower = string.toLowerCase();
  console.log(strToLower);
  const vowelCount = strToLower.match(/[aeiou]/g);
  //   for (let char of strToLower) {
  //     console.log(char);
  //     if (
  //       char === "a" ||
  //       char === "e" ||
  //       char === "i" ||
  //       char === "o" ||
  //       char === "u"
  //     ) {
  //       vowels += 1;
  //     }
  //   }
  return vowelCount.length;
//   return vowels;
};

const string = "Hello Boy how are YoU, I am fine";
const result = vowelCount(string);
console.log("The number of vowels is: ", result);

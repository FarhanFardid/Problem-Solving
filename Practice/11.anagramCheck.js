// Write a function to determine if two strings are anagrams of each other.

const anagramCheck = (str1, str2) => {
  const lowerStr1 = str1.replace(/[\W_]/g, "").toLowerCase();
  const lowerStr2 = str2.replace(/[\W_]/g, "").toLowerCase();

  const sortStr1 = lowerStr1.split("").sort().join("");
  const sortStr2 = lowerStr2.split("").sort().join("");
  if (sortStr1 === sortStr2) {
    return "The strings are Anagram";
  } else {
    return "The strings are not Anagram";
  }
};

const result = anagramCheck("listeN", "Silent");
console.log(result);

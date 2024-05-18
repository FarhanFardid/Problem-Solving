// Count the number of vowels in a string. Write a function to count the number of vowels in a given string.

const vowelsCount =(string)=>{
    let str = string.toLowerCase();
    let vowels= str.match(/[aeiou]/g);
    console.log(str);
    console.log(vowels);
return vowels.length;
}

const string1= "OpenAI Gap-3";
const result = vowelsCount(string1);
console.log("The number of vowels in the string is: ", result); 
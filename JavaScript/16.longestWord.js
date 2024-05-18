// Find the longest word in a string. Write a function to find the longest word in a given string.

const longestWord =(str)=>{
    let longWord = '';
    let cleanLowStr = str.replace(/[^\w\s]/g, "").toLowerCase();
    let words = cleanLowStr.split(' ');
    console.log(cleanLowStr);
    console.log(words);

    for(let w of words){
        if(w.length > longWord.length){
            longWord = w;
        }
    }
    console.log(longWord);
return  longWord;
}

// const string ='Hello from Bangladesh We are Bengali Tigers';
const string ='The quick brown fox jumps over the lazy dog';
const result = longestWord(string);
console.log("The Longest word in the String is : ", result); 
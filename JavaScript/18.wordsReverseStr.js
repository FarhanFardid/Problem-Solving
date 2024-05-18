// Reverse words in a string. Write a function to reverse the order of words in a given string.

const reverseWordsStr =(str) =>{
    let words = str.replace(/[^\w\s]/g, "").split(' ').reverse();
    let revStr = words.join(' ');

    console.log(words);
    console.log(revStr);
    return revStr;

}

// const string = "Hello from Bangladesh. We are a Proud Country";
const string = "OpenAI's GPT-3 is amazing";
const result = reverseWordsStr(string);
console.log("The Reverse Words from the String are : ",result);
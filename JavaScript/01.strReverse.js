// Javascript Problem solving
// Reverse a string. Write a function that takes a string as input and returns the string reversed.

function strReverse (str) {
    let modifiedStr = str.split('');
    console.log(modifiedStr);
    let reverseString = modifiedStr.reverse().join('');
    console.log(reverseString); 
    return reverseString;
    
}

let reverseStr = strReverse('Hello, World');
console.log(reverseStr);
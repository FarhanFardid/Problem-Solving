// Reverse a number. Write a function that takes a number as input and returns the number reversed.

const numReverse =(number) =>{
    let numStr = number.toString();
    console.log(numStr);
    let modNum = parseInt(numStr.split('').reverse().join(''));
    console.log(modNum);
    return modNum;
} 

const numRev = numReverse(567);
console.log(numRev);
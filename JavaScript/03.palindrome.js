// Check for palindrome. Write a function to determine if a given string is a palindrome (reads the same backward as forward).

const checkPalindrome =(str) =>{
    let mainStr= str.replace(/[_\W]+/g,"").toLowerCase();
    let reverseStr = mainStr.split('').reverse().join('');
    console.log(mainStr);
    console.log(reverseStr);
    if(mainStr === reverseStr){
        return "Palindrome";
    }
    else{
        return "Not Palindrome";
    }

}

// const result = checkPalindrome('raceCar');
// const result = checkPalindrome('A man, a plan, a canal, Panama"));');
const result = checkPalindrome('Hello"));');
console.log(result);
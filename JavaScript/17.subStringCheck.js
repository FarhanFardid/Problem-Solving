// Check for a given substring in a string. Write a function to check if a given substring exists in a string.

const subStrCheck =(str,subStr) =>{
    let mainStr = str.toLowerCase();
    let checkStr = subStr.toLowerCase();
    const response = mainStr.includes(checkStr);
    // const response = mainStr.indexOf(checkStr);
console.log(response);
return response;

}

const string = 'Save the planet Earth for your next Generation';
const subString = 'on';
const result = subStrCheck(string,subString);
console.log("The subString exists in the String : ", result);


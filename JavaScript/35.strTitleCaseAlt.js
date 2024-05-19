//  Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 

const strToTitleCase=(str)=>{
    let titleCase = str.replace (/\b\w/g, function(l){return l.toUpperCase()})

 console.log(titleCase);
 return titleCase;

}
const mainStr ="we are bangladeshi";
const result = strToTitleCase(mainStr);
console.log("The String into Title Case is: ", result);
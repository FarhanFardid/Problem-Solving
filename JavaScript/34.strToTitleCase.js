//  Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 

const strToTitleCase=(str)=>{
    let titleWords=[];
    let words = str.split(' ');
console.log(words);
for(let w of words){
    let p1= w.substring(0,1).toUpperCase();
    let p2= w.substring(1,w.length);
    let ulWord= p1+p2;
    console.log(p1);
    console.log(p2)
    console.log(ulWord);
    titleWords.push(ulWord);

}
let titleCaseStr= titleWords.join(' ');
console.log(titleWords);
console.log(titleCaseStr);
return titleCaseStr;
}

const mainStr ="we are bangladeshi";
const result = strToTitleCase(mainStr);
console.log("The String into Title Case is: ", result);
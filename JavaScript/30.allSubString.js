//  Find All Substrings. Write a function that returns all possible substrings of a given string.

const allSubStr=(str)=>{
    let subStr =[];
    for(let i =0; i<str.length;i++){
        for(let j=i+1;j<=str.length;j++){
            subStr.push(str.slice(i, j));
        }
    }
console.log(subStr);
return subStr;
}

const mainStr = "abcd";
const result=allSubStr(mainStr);
console.log("All the Substring of the main String are: ",result); 
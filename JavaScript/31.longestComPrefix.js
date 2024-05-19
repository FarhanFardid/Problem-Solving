// Longest Common Prefix.   Write a function that finds the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".

const longestPrefix = (strs)=>{
    if(strs.length === 0){
        return "No Strings ";
    }
    let prefix =strs[0];
    for(let i=1; i<strs.length;i++){
        
        while(strs[i].indexOf(prefix) !== 0){
            prefix = prefix.substring(0, prefix.length -1);
            console.log(strs[i].indexOf(prefix));
            console.log(prefix);
            if(prefix === ""){
                return "Not Exists";
            }
        }
    }
  return prefix;
}

const arrayStr = ["flower", "flow"];
const result = longestPrefix(arrayStr);
console.log("The longest prefix in the array of string : ",result);
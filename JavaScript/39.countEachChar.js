//  Given a string, write a function to count the occurrences of each character in the string. 

const charCount =(str)=>{
    let charObj ={};
    for(let i=0;i<str.length;i++){
        let char = str.charAt(i);
        if(!charObj[char] ){
            charObj[char]=1;
        }
        else{
            charObj[char] +=1;
        }
    }
    console.log(charObj);
    return charObj;
}
const mainStr = "GeeksforGeeks";
const result = charCount(mainStr);
console.log("The Numbers Count for each Character is: ", result); 
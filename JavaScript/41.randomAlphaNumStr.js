//  Write a function that generates a random alphanumeric string of a given length. 

const randomAlphaNumStr =(n) =>{
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let newStr = "";
    let charLength = characters.length-1;
    for(let i =0; i<n;i++){
        randomIndex = Math.floor(Math.random() * (charLength - 0 +1));
        console.log(randomIndex);
        let randomChar = characters.charAt(randomIndex);
        console.log(randomChar);
        newStr += randomChar;
    }
 console.log(newStr);
 return newStr;
}
const length =16;
const result =randomAlphaNumStr(length);
console.log("The Random AlphaNumeric String of length", length, "is : ", result);


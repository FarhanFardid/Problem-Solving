//  Implement a function to reverse a string without using the built-in reverse() method. 

const revString = (str) =>{
    let revStr =' ';
    for(let i =str.length-1; i >= 0;i--){
        revStr +=str[i];
    }
    console.log(revStr);
    return revStr;
}

const mainStr= "tpircSavaJ si sihT ,olleH";
const result = revString(mainStr);
console.log("The Reversed String is : ", result);
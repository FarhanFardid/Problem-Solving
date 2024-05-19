// Generate random numbers within a range. Write a function to generate a random number within a specified range.

const randomRangeNum = (min,max) =>{
 
    let random = Math.floor(Math.random() * (max-min+1)) + min;
    console.log(random);
    return random;
}

const min =3;
const max = 7;
const result = randomRangeNum(min,max);
console.log(`The Random Number between the Range ${min} and ${max} is : ${result}`);
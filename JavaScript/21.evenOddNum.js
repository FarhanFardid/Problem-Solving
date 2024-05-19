// Check if a number is even or odd. Write a function to determine if a given number is even or odd.
const evenOdd = (number)=>{
   if(number < 0){
    return "- Please Provide a positive number";
   }
   else if(number % 2 === 0){
    return "Even";
   }
   else 
   return "Odd";
}

const num = 70;
const result = evenOdd(num);
console.log(`The input ${num} is a / an ${result} Number`);
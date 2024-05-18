// Find the factorial of a number. Write a function to calculate the factorial of a given integer.

const factorial = (n) =>{
if(n<0){
    return "Please, provide a positive number";
}
else if( n <= 1){
    return 1;
}
else{
    return n * factorial(n-1);
}

}


const number = 10;
const result = factorial(number);
console.log("Factorial of the ", number , "is :", result );
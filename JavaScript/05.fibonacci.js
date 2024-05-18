// Fibonacci sequence. Write a function to generate the nth Fibonacci number.

const fibonacci=(n)=>{
    if(n === 0){
        return 0;
    }
    else if(n ===1){
        return 1;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }


}
const number= 11;
const result= fibonacci(number);
console.log("The Fibonacci number of" , number , "th is: ", result );
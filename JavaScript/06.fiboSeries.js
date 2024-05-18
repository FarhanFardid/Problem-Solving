// Fibonacci series. Write a function to generate the Fibonacci series to  nth number.

const fiboSeries=(n) =>{
    let fibonacci = [0, 1];
    if(n === 0){
        return [fibonacci[0]];
    }
    else if(n===1){
        return fibonacci;
    }
    else{
        for(let i =2; i<n; i++){
            fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
        }
        return fibonacci;
    }

}

const number = 8;
const result = fiboSeries(number);
console.log("The Fibonacci series till ", number, " number is: ", result); 
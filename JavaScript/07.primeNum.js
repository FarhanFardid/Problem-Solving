// Check for prime numbers. Write a function to determine if a given number is prime.

const primeNum = n =>{
    if(n <= 1){
        return "non prime";
    }
  
    else{
        // for (let i = 2; i <= n / 2; i++)   // without Math.sqrt() method

        for(let i=2; i<= Math.sqrt(n);i++){
            if(n % i === 0){
                return "non prime"
            }
        }
                return "prime"
        
        }
    }



const number= 15;
const result = primeNum(number);

console.log("The Given number " , number , " is a ", result, " number");
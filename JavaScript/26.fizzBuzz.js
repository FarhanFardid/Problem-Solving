// Write a program that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

const fizzBuzz =(n) =>{
    if(n<=0){
        console.log("Please  provide a positive number greater than 0");
    }
    else {
        for(let i=1; i<=n; i++){
            if(i % 3 === 0 && i % 5 === 0){
                console.log("FizzBuzz");
            }
            else if(i% 3 === 0){
                console.log("Fizz");
            }
            else if(i%5 === 0){
                console.log("Buzz");
            }
            else{
                console.log(i);
            }
        }
    }

}

const number = 30;
fizzBuzz(number); 
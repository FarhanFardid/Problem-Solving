// Write a program that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz

const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 15 == 0) {
      console.log("FizzBuzz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
};

const number = 30;
const result = fizzBuzz(number);

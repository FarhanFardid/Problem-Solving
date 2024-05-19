// Swap two variables without using a temporary variable or Destructuring.

const swapVariables = (a,b)=>{
      a  = a+b;
     console.log(a);
      b = a-b;
     console.log(b);
      a = a-b;
     console.log(a);
return [a,b];
    }

const num1 = 45;
const num2 = 40;
const result =swapVariables(num1,num2);
console.log(`The variables are [${num1} , ${num2}]. After swapping they are: `,result)


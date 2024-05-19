// Implement a simple calculator. Write a function to perform basic arithmetic operations like addition, subtraction, multiplication, and division.

const calculator=(op1,op2,operation)=>{

    switch(operation){
        case 'add': return op1 + op2;
        case 'sub' : return op1 - op2;
        case 'mul': return op1 * op2;
        case 'div' : {
            if (op1 === 0 || op2 === 0){
                return "Operand is Zero";
            }
            else{
                return op1 / op2;
            }
        }
        default: 
        return "Invalid Operation"; 
    }
}

const num1 = -4;
const num2 = 6;
// operations:  add, sub, mul, div
const operation = 'add'; 
const result = calculator(num1,num2,operation);
console.log(`The result of ${num1} and ${num2} after performing ${operation} operation is : `, result);
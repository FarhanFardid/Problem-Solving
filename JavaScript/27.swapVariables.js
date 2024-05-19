// Swap two variables Any way.

const swapVar = (num1,num2)=>{

    // process-1  Using Temporary variable
    let temp = num1;
     num1 = num2;
    num2 = temp;
    console.log(num1,num2);

    // process-2   Using Destructuring

    //  [num1,num2] = [num2,num1];
    //  console.log(num1,num2);
     return {'Num1': num1, "Num2": num2}
}

const val1 = 23;
const val2 = 45;
const result =swapVar(val1,val2);
console.log("The Variables after swapping is : ", result);
// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

function evenArr (arr){

    let newArr = [];
    for(let val of arr){
        if(val % 2 === 0){
            newArr.push(val);
        }
    }
    console.log(newArr);
    return newArr;
}

const numbers = [2, 3, 4, 6, 8, 11, 14, 16, 18, 0, 24];
const result = evenArr(numbers);
console.log("The Even numbers in the Array are:" , result);
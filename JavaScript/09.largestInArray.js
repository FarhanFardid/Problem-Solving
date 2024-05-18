// Find the largest element in an array. Write a function to find the largest element in an array.

const largestInArray = (array) =>{

    let largest = array[0];
    for(let val of array){

        if(val > largest){
            largest = val;
        }
    }
    return largest;
}

const numbers =[-2, -3, -56, -35, -1, -34, -45];
const result = largestInArray(numbers);
console.log("The Largest element in tha Array is: ", result);
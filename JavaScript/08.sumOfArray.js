// Calculate the sum of array elements. Write a function to calculate the sum of all elements in an array.

function sumOfArray(array) {
    let sum =0;
    for (let i=0; i<array.length;i++){
        sum += array[i];
    }
return sum;
}

const numbers = [ 2, 4, 5, 6, 7, 8, 23, 11];
const result = sumOfArray(numbers);

console.log("Sum of all the elements in the array is:  ", result);

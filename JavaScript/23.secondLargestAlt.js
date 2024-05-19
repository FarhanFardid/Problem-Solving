// // Find the second largest element in an array. Write a function to find the second largest element in an array.

const secondLargest = (arr) =>{
if(arr.length < 2){
    return "Minimum two numbers required in the Array";
}
else{
    let largest = arr[0];
    for(let val of arr){
        if(val > largest){
            largest = val;
        }
    }
    let index = arr.indexOf(largest);
    console.log(index);
    arr.splice(5,1);
    console.log(arr);
    let secondLargest = arr[0];
    for(let val of arr){
        if(val > secondLargest){
            secondLargest = val;
        }
    }
    console.log(secondLargest);

return secondLargest;
}
} 

const numbers =[ 34, 23, 56, 76, 89, 90, 21, 12];
const result =secondLargest(numbers);
console.log(`The Second Largest Element in the Array is: ${result}`);
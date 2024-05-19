// Find the second largest element in an array. Write a function to find the second largest element in an array.

const secLargest= (arr) =>{
    function func (a,b) {
return b-a;
    }
    let arrSorted = arr.sort(func);
    console.log(arrSorted);
    const secLarge = arrSorted[1];
    return secLarge;

}

const numbers =[ 34, 23, 56, 76, 89, 90, 21, 12, 10, 3];
const result =secLargest(numbers);
console.log(`The Second Largest Element in the Array is: ${result}`);


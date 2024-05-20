//   Implement a function that returns the average value of numbers in an array. 

const avgNumVal =(arr) =>{

let sum =0;
 let totalElement = arr.length;
 for(let i=0;i<totalElement;i++){
    sum += arr[i];
 }
 console.log(sum);
 let avg = parseFloat((sum /totalElement).toFixed(2));
 console.log(avg);
 return avg;
}

const numbers = [23, 45, 56, 78, 98, 77, 3];
const result = avgNumVal(numbers);
console.log("The average value of the numbers of Array is : ", result);
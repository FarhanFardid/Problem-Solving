//  Given an array of numbers, write a function to find the largest and smallest numbers in the array. 

const arrLargestSmallest = (arr) =>{

    let largest = arr[0];
    let smallest =arr[0];
    for(let n of arr){
        if(n> largest){
            largest = n;
        }
        if(n < smallest){
            smallest = n;
        }
    }
    console.log(largest);
    console.log(smallest);
    return [largest,smallest];


}

const numbers = [2, 3, 56, 78, 90, 54, 0, -1];
const result= arrLargestSmallest(numbers);
console.log("The Largest and Smallest Number in the Array are: ", result);
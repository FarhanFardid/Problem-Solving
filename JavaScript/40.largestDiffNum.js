//   Write a function that takes an array of integers and returns the largest difference between any two numbers in the array. 

const largestDiffNum = (arr) =>{
    let largestDiff =1;

    let sortedArr = arr.sort(function(a,b){return b-a})
    console.log(sortedArr);
    // let diff =  sortedArr[0] - sortedArr[sortedArr.length-1];
    // console.log(diff);
    for(let i =0; i<sortedArr.length; i++){
        for(let j=i+1; j<=sortedArr.length;j++){
            let diff = sortedArr[i] - sortedArr[j]; 
            if(diff > largestDiff){
                largestDiff = diff;
            }
        }
    }
    console.log(largestDiff);
return largestDiff;

}

const numbers = [2, -3, 5, 7, 8, 9, 34, 56, 45, 12];
const result = largestDiffNum(numbers);
console.log("The Largest Difference Between Two Numbers of the Array is: ",result);
// Given an array of integer numbers and an integer target, return indices of the two numbers such that they add up to target.

const twoSumMatch=(arr,val) =>{

 let indices =[];
    for(let i=0; i<arr.length; i++){
        for(let j =i+1;j<=arr.length;j++){
            let num = arr[i] + arr[j];
            if( num == val){
            indices.push(i,j);
        return indices;  
        }
        }
    }
    console.log(indices);
    return indices;
}

const numbers =[2, 4, 5, 6, 8];
const targetVal= 5;
const result= twoSumMatch(numbers,targetVal);
console.log("The Indices of the two values that add up to match the target Value are: ",result);

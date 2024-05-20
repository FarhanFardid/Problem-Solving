// Implement a function that merges two arrays into a single sorted array.

const mergeSortedArr= (arr1,arr2)=>{

    let newArr =[...arr1,...arr2];
    console.log(newArr);
 let sortedArr= newArr.sort(function(a,b){return a-b;})
    return sortedArr;
}

const num1= [1, 2, 4, 5, 11, 12];
const num2 =[ 5, 6, 7, 9, 10];
const result = mergeSortedArr(num1,num2);
console.log("The Merged sorted array after merging the two arrays is : ", result);
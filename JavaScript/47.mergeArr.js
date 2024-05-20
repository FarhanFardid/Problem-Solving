//  Implement a function that merges two arrays into a single array, alternating elements from each array. 

const mergeArr=(arr1,arr2)=>{
    let length = Math.max(arr1.length, arr2.length);
    console.log(length);
   let mergeArray=[];
   for(let i =0; i<length;i++){
    if(i<arr1.length){
        mergeArray.push(arr1[i])
    }
    if(i<arr2.length){
        mergeArray.push(arr2[i])
    }
   }
   console.log(mergeArray);
return mergeArray;
}


const num1= [1, 2, 4, 5, 11, 12];
const num2 =[ 5, 6, 7, 9, 10];
const result = mergeArr(num1,num2);
console.log("The Merged array after merging the two arrays is : ", result);
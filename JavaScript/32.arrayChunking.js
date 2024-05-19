// Array Chunking.  Write a function that splits an array into chunks of a given size.

const arrChunk = (arr,size)=>{

    let chunkArr= [];
    for(let i=0; i<arr.length; i +=size){
        chunkArr.push(arr.slice(i, i+size));
    }
    console.log(chunkArr);
    return chunkArr;
}

const array = [3, 4, 5, 6 ,7 ,8, 90];
const size = 2;
const result = arrChunk(array,size);
console.log("The array after Chunking to the size", size, "is : ",result);
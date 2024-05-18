// Flatten an array. Write a function to flatten a nested array.

const flatArray =(array)=>{
let simpleArray=[];

for (let val of array){
    console.log(val);
    if(!Array.isArray(val)){
        simpleArray.push(val);
    }
    else{
       simpleArray = simpleArray.concat(flatArray(val));
    }

}
return simpleArray;
console.log(simpleArray);
}

const mixedNum = [1, 2, 3, [9, 10, [11, 12, 13], 14 ], [4, 5, 6], [7, 8],  15, 16 ];
const result = flatArray(mixedNum);
console.log("The array after Flatten to simple format is: ", result);
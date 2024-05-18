// // Flatten an array. Write a function to flatten a nested array using reduced method.

const flattenArray = (arr)=>{

    return arr.reduce((acc,val) =>Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val) , [] )
}

const mixedArr= [1, 2, 3, [9, 10, [11, 12], 14 ], 13, [4, 5, 6], [7, 8],  15, 16 ];
const result = flattenArray(mixedArr);
console.log("The Array after flattened is : ", result);
//  Write a JavaScript program to find the largest element in a nested array. 

const largestElement = function(arr){

    let largest = 0;
    for(let ar of arr){
        if(Array.isArray(ar)){
        for(let val of ar){
            if(val > largest){
                largest = val;
            }
        }
    }
    else if(ar > largest){
        largest = ar;
    }
}
    console.log(largest);
    return largest;
}

const numbers= [1, 3, 4, 5, [6, 8, 9], [10, 16]];
const result = largestElement(numbers);
console.log("The largest element in the Nested Array is: ", result); 
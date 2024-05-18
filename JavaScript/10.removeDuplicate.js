// Remove duplicates from an array. Write a function to remove duplicates from an array.

const removeDuplicate = (array)=>{

    let uniqueArray=[];
    for(let val of array){
        if(!uniqueArray.includes(val)){
            uniqueArray.push(val);
        }

    }
return uniqueArray;

}

// const numbers = [23, 45, 56, 56, 90, 23, 60, 30, 45,67, 90];
const numbers =['a', 'b', 'c', 'b', 'd', 'e', 'e'];
const result = removeDuplicate(numbers);
console.log("The Array after removing duplicates is: ", result);

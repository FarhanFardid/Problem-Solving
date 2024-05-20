//  Write a function that sorts an array of strings in alphabetical order. 

const sortStrAlphaOrder = (arr) =>{

    let sortedStrArr = arr.sort();
    console.log(sortedStrArr);
    return sortedStrArr;

}

const strArr= ["hello", "good", "hi", "apple", "kayak", "big"];
const result = sortStrAlphaOrder(strArr);
console.log("The Array of string after Alphabetic Order is : ",result);
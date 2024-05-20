//   Write a function that removes all falsy values (false, null, 0, “”, undefined, and NaN) from an array. Using Array splice method.

const falsyValuesRemove =(arr)=>{
 
    for(let i=0;i<arr.length;i++){
        let val = arr[i];
        if(val === false  || val === null || val === undefined || val === 0 || (typeof val === 'number' && isNaN(val)) || val === ""){
            arr.splice(i,1);
            i--;
        } 
   
    }
    console.log(arr);
    return arr;
}

const mixValues = ["null", null, undefined, 1, 3, [], {},"undefined", "NaN", false, true, 0,  NaN, "Javascript","" ];
const result = falsyValuesRemove(mixValues);
console.log("The Array after removing the falsy values is : ", result);
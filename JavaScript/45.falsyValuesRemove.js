//   Write a function that removes all falsy values (false, null, 0, “”, undefined, and NaN) from an array. 

const falsyValuesRemove =(arr)=>{
    let truthyVal=[];
    for(let val of arr){
        if(! (val === false || val ==="null" || val === "undefined" || val === 0 || val === "NaN" || val === "")){
        truthyVal.push(val);
        }
    }
console.log(truthyVal);
return truthyVal;
}

const mixValues = ["null", 1, 3, [], {},"undefined", "NaN", false, true, 0, "Javascript", "" ];
const result = falsyValuesRemove(mixValues);
console.log("The Array after removing the falsy values is : ", result);
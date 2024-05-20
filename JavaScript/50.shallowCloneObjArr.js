//  Implement a shallow clone function in JavaScript that creates a copy of a nested object or array without any reference to the original. 

const shallowCloneObjArr= (obj) =>{

    let cloneObj = {...obj};
    console.log(cloneObj);
    if(cloneObj == obj){
        return "same";
    }
    else 
    return "Not Same";

}
const mainObj = {
    name:"jack",
     age: 30,
     city:"NY"
};
const result =shallowCloneObjArr(mainObj);
console.log("The clone Copy of the array is : ", result);
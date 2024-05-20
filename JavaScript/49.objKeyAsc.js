//  ***** Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order. 

const sortObjKey=(arr,strKey)=>{

    function ascFunc(a,b){
        if(a[strKey] > b[strKey]){
            return 1;
        }
        if(a[strKey] < b[strKey]){
            return -1;
        }
            return 0;
    }
    let arrSorted = arr.slice().sort(ascFunc);

    
    console.log(arrSorted);
    return arrSorted;
}
const objectArr =[
    {name:"John", age:25 },
    {name:"Jack", age:35 },
    {name:"Joe", age:20 },
];
const str ='age';
const result = sortObjKey(objectArr,str);
console.log("The Object after sort on the key age : ",result);
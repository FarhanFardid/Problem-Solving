// Find the second largest element in an array. Write a function to find the second largest element in an array.

const secondLargest = (array) =>{
    if(array.length < 2){
        return "Minimum two numbers required in the Array";
    }
    else {
               let largest = array[0];
               let secLargest = array[1];

               if(secLargest > largest){
                [largest,secLargest] = [secLargest,largest];
               }

               for(let i=2;i<array.length; i++){
                if(array[i] > largest){
                    secLargest = largest;
                    largest = array[i];
           
                }
                else if(array[i]> secLargest && array[i] !== largest){
                    secLargest = array[i];
                }
               }
               return secLargest;
    }

}

// const numbers =[ 34, 23, 56, 76, 89, 90, 21, 12];
const numbers =[ 34,67];
const result =secondLargest(numbers);
console.log(`The second largest number in the array is: ${result}`);
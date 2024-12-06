//  Write a function to flatten a nested array.

const flattenArray = (arr) => {
  //   let plainArray = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (!Array.isArray(arr[i])) {
  //       plainArray.push(arr[i]);
  //     } else {
  //       plainArray = plainArray.concat(flattenArray(arr[i]));
  //     }
  //   }
  //   return plainArray;

  // reduce method
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),
    []
  );
};

const array = [2, 3, 4, 5, 78, [34, 23, 45], [56, 78, 90, [3, 4, 9]]];
const result = flattenArray(array);
console.log("The array after flattened: ", result);

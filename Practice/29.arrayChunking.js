// Array Chunking.  Write a function that splits an array into chunks of a given size

const chunkArray = (arr, size) => {
  let chunk = [];

  for (let i = 0; i < arr.length; i += size) {
    let part = arr.slice(i, i + size);
    console.log(part);
    chunk.push(part);
  }
  return chunk;
};

const arr1 = [2, 4, 5, 7, 8,9,4];
const result = chunkArray(arr1, 3);

console.log(result);

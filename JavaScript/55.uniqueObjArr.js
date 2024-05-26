// Write logic to get unique objects from below array
// I/P: [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}];
// O/P: [{name: "sai"},{name:"Nang"}{name: "111111"}

const uniqueObj = (arr) => {
  return arr.reduce((unique, item) => {
    if (!unique.some((obj) => obj.name === item.name)) {
      unique.push(item);
    }
    return unique;
  }, []);
};

const mixedObj = [
  { name: "sai" },
  { name: "Nang" },
  { name: "sai" },
  { name: "Nang" },
  { name: "111111" },
];

const result = uniqueObj(mixedObj);
console.log("The Unique Objects in the Array are: ", result);

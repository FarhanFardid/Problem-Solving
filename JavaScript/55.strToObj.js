// . Write a function that converts string input into an object
// ("a.b.c", "someValue");
// {a: {b: {c: "someValue"}}}

const strToObj = (str, val) => {
  let keys = str.split(".");
  console.log(keys);
  let result = {};
  let current = result;

  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    if (i === keys.length - 1) {
      current[key] = val;
    //   console.log("if",current);
    //   console.log("if",result);
    } else {
      current[key] = {};
      current = current[key];
    //   console.log('else',current);
    //   console.log('else',result);
    }
  }
  console.log(result);
  return result;
};

const string = "a.b.c";
const value = "Some values";
const result = strToObj(string, value);
console.log("The string in Object is: ", result);

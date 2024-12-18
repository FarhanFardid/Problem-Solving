// Write a function that generates a random alphanumeric string of a given length.

const randomStringGenerator = (n) => {
  let randomString = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const charLength = characters.length - 1;

  for (i = 0; i < n; i++) {
    let index = Math.floor(Math.random() * charLength);
    // console.log(index);
    randomString += characters[index];
  }
  return randomString;
};

console.log(randomStringGenerator(14));

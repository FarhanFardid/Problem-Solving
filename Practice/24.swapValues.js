// Swap two variables Anyway

const swapValues = (num1, num2) => {
  let temp = num1;
  num1 = num2;
  num2 = temp;
  console.log("The number after swapping is: ", num1, num2);
};

const result = swapValues(5, 7);

// Swap two variables without using a temporary variable or Destructuring.

const swapVariables = (a, b) => {
  a = a + b;
  b = a - b;
  a = a - b;

  console.log("The numbers before swapping are: ", b, a);
  console.log("The numbers after swapping are: ", a, b);
};

const result = swapVariables(5, 9);

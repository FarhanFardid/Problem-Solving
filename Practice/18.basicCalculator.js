//  Write a function to perform basic arithmetic operations like addition, subtraction, multiplication, and division.

const calculator = (op, num1, num2) => {
  switch (op) {
    case "add":
      return num1 + num2;

    case "sub":
      return num1 - num2;

    case "mul":
      return num1 * num2;

    case "div":
      if (num2 == 0) {
        return "The divisor can't be zero";
      } else {
        return num1 / num2;
      }
    default:
      return "Please enter a valid operations like - add, sub, mul or div";
  }
};

const result = calculator('add', 4, 5);
console.log("The result is:", result);

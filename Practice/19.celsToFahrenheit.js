// Write a function to convert Celsius to Fahrenheit.

const celsToFahrenheit = (celsius) => {
  return (fahrenheitTemp = (celsius * 9) / 5 + 32);
};

const celsius = 56;
const result = celsToFahrenheit(celsius);
console.log("The temperature in Fahrenheit unit is: ", result, "deg F");

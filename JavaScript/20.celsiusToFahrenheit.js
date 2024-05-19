// Convert Celsius to Fahrenheit. Write a function to convert Celsius to Fahrenheit.

const celsiusToFahrenheit=(celsius) =>{

    const fahrenheitTemp = (celsius * (9/5)) + 32;
    return fahrenheitTemp;
}

const celsiusTemp = 56;
const result = celsiusToFahrenheit(celsiusTemp);
console.log(`The Temperature of ${celsiusTemp} degree Celsius in Fahrenheit is : ${result}` );
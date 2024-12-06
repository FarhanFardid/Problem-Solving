// Fibonacci series. Write a function to generate the Fibonacci series to nth number

const fibonacciSeries = (num) => {
  const fiboSeries = [0, 1];
  if (num <= 0) return [];
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  for (let i = 2; i < num; i++) {
    fiboSeries[i] = fiboSeries[i - 1] + fiboSeries[i - 2];
  }
  return fiboSeries;
};

const number = 3;
const result = fibonacciSeries(number);
console.log(result);

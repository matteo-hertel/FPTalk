const numbers = [1, 2, 3, 4, 5];

const even = numbers.filter(number => isEven(number));

console.log(even);
// [ 2, 4 ]

function isEven(number) {
  return number % 2 === 0;
}

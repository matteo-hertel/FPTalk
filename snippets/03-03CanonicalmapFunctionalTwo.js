const numbers = [1, 2, 3, 4, 5];

const doubles = numbers.map(number => double(number));

console.log(doubles);
// [ 2, 4, 6, 8, 10 ]

function double(number) {
  return number * 2;
}

const numbers = [1, 2, 3, 4, 5];

const doubles = numbers.map(number => double(number));

console.log(doubles);

function double(number) {
  return number * 2;
}
// [ 2, 4, 6, 8, 10 ]

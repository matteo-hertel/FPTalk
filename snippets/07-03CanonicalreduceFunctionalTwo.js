const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce(
  (accumulator, number) => sum(accumulator, number),
  0,
);

function sum(a, b) {
  return a + b;
}

console.log(total);
// 15

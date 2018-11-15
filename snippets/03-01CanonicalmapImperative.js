const numbers = [1, 2, 3, 4, 5];
const doubles = [];

for (let number of numbers) {
  doubles.push(number * 2);
}

console.log(doubles);
// [ 2, 4, 6, 8, 10 ]

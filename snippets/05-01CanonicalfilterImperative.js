const numbers = [1, 2, 3, 4, 5];
const even = [];

for (let number of numbers) {
  if (number % 2 === 0) {
    even.push(number);
  }
}

console.log(even);
// [ 2, 4 ]

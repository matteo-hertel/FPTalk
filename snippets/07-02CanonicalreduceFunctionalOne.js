const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce((accumulator, number) => {
  return (accumulator += number);
}, 0);

console.log(total);
// 15

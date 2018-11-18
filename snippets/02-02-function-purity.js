const numbers = [1, 2, 3, 4, 5];

function squareAll() {
  const len = numbers.length;
  for (let i = 0; i < len; i++) {
    numbers[i] = numbers[i] * numbers[i];
  }
  return numbers;
}

console.log(squareAll(numbers)); //[ 1, 4, 9, 16, 25 ]
console.log(squareAll(numbers)); //[ 1, 16, 81, 256, 625 ]
console.log(squareAll(numbers)); //[ 1, 256, 6561, 65536, 390625 ]

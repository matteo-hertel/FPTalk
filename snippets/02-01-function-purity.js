function square() {
  squared = Math.pow(number, 2);
  return squared;
}

let squared, number;

number = 4;
square();
console.log(squared); //16

number = 8;
square();
console.log(squared); //64

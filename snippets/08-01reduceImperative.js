// List of cities I lived in
const cities = ['Torino', 'London', 'Dubai', 'London'];
let friendlyMessage = 'In my life i lived in: ';

for (let city of cities) {
  friendlyMessage += `\n - ${city}`;
}

console.log(friendlyMessage);
// In my life i lived in:
//  - Torino
//  - London
//  - Dubai
//  - London
